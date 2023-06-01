using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class MigrationsController : ControllerBase
{
    private readonly SetokContext _context;

    public MigrationsController(SetokContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult> Get()
    {
        try
        {
            // Migrate the database to the latest version
            await _context.Database.MigrateAsync();
            // Create the database if it does not already exist
            await _context.Database.EnsureCreatedAsync();
        }
        catch (Exception e)
        {
            var message = "C:\\Users\\{User}\\AppData\\Local\\setok.db";
            return BadRequest($"Error migrating db, try delete: {message} -- Exception: {e.Message}");
        }

        return Ok("Database has been migrated");
    }
}