using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

var builder = WebApplication.CreateBuilder(args);
AddServices(builder);
AddSwagger(builder.Services);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

// TODO: Configure the development environment.
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowAll");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();

void AddServices(WebApplicationBuilder builder)
{
    // TODO: Check out AutoFac and add it to the builder. To resolve dependencies.

    // TODO: When list gets too big or custom seperate in files
    // Add services to the container.
    builder.Services.AddControllers();
    builder.Services.AddScoped<SetokContext>();
    builder.Services.AddScoped<IMessageService, MessageService>();
    builder.Services.AddScoped<IItemService, ItemService>();
    builder.Services.AddAutoMapper(typeof(SetokProfile));
}

void AddSwagger(IServiceCollection services)
{
    // TODO: Configure Swagger
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Setok API", Version = "v1" });
    });
}
