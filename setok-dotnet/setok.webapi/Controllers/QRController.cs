using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.IO.Compression;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using QRCoder;

[ApiController]
[Route("[controller]")]
public class QRController : ControllerBase
{
    private readonly SetokContext context;

    public QRController(SetokContext context)
    {
        this.context = context;
    }

    [HttpPost]
    public async Task<ActionResult> Post(QRCodeDto qRCodeDto)
    {
        QRCodeGenerator qrGenerator = new QRCodeGenerator();
        QRCodeData qrCodeData = qrGenerator.CreateQrCode(qRCodeDto.Text, QRCodeGenerator.ECCLevel.Q);
        QRCode qrCode = new QRCode(qrCodeData);
        Bitmap qrCodeImage = qrCode.GetGraphic(20);

        var image = new Image() { bytes = BitmapToBytes(qrCodeImage) };
        context.Images.Add(image);
        context.SaveChanges();

        var savedImage = await context.Images.FindAsync(image.Id);
        return File(savedImage.bytes, "image/png");
    }

    [HttpPost]
    [Route("multiple")]
    public async Task<ActionResult> PostMultiple(string[] qRCodeDtos)
    {
        var tasks = new List<Task>();
        var semaphore = new SemaphoreSlim(3, 3);
        using (MemoryStream memoryStream = new MemoryStream())
        {
            using (ZipArchive zipArchive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
            {
                var images = new List<Image>();

                var i = 0;
                foreach (var text in qRCodeDtos)
                {
                    tasks.Add(Task.Run(async () =>
                    {
                        i++;
                        await CreateQrCodeImage(semaphore, images, i, text);
                    }));
                }

                await Task.WhenAll(tasks);

                foreach (var image in images)
                {
                    AddFileToZipArchive(zipArchive, $"{image.Id}.png", image.bytes);
                }

                // Reset the position of the memory stream to the beginning
                memoryStream.Seek(0, SeekOrigin.Begin);

                return File(memoryStream, "application/zip");
            }
        }
        
        async Task CreateQrCodeImage(SemaphoreSlim semaphore, List<Image> images, int i, string text)
        {
            await semaphore.WaitAsync();
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q);
            QRCode qrCode = new QRCode(qrCodeData);
            Bitmap qrCodeImage = qrCode.GetGraphic(20);

            var image = new Image() { bytes = BitmapToBytes(qrCodeImage) };
            if (image != null && image.bytes != null)
            {
                Debug.WriteLine($"Adding file {i}");
                images.Add(image);
            }

            semaphore.Release();
        }
    }

    private void AddFileToZipArchive(ZipArchive zipArchive, string filename, byte[] fileContents)
    {
        var zipEntry = zipArchive.CreateEntry(filename);
        using (var zipEntryStream = zipEntry.Open())
        {
            zipEntryStream.Write(fileContents, 0, fileContents.Length);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult> Get(int id)
    {
        var image = await context.Images.FindAsync(id);
        if (image != null)
        {
            return File(image.bytes, "image/png");
        }
        else
        {
            return NotFound();
        }
    }

    private byte[] BitmapToBytes(Bitmap bitmap)
    {
        using (MemoryStream stream = new MemoryStream())
        {
            bitmap.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
            var array = stream.ToArray();
            return array;
        }
    }
}