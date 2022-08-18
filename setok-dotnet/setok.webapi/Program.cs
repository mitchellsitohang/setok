using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
ConfigureLogging(builder);
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

WebApplication? app;
try
{
    app = builder.Build();
}
catch (System.Exception e)
{
    throw new Exception(e.Message + "\n" + "Check if services are DI correctly! (Double check generic DI)");;
}

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

void ConfigureLogging(WebApplicationBuilder builder)
{
    builder.Logging.ClearProviders();
    builder.Logging.AddDebug();
}

void AddServices(WebApplicationBuilder builder)
{
    // TODO: Check out AutoFac and add it to the builder. To resolve dependencies.

    // TODO: When list gets too big or custom seperate in files
    // Add services to the container.
    builder.Services.AddControllers();
    builder.Services.AddAutoMapper(typeof(SetokProfile));
    DependancyInjectionModule.RegisterServices(builder.Services);
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
