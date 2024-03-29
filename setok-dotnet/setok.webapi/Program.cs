using Microsoft.OpenApi.Models;
using static Microsoft.EntityFrameworkCore.RelationalDatabaseFacadeExtensions;

var builder = WebApplication.CreateBuilder(args);
AddDbContexts(builder);
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
    throw new Exception(e.Message + "\n" + "Check if services are DI correctly! (Double check generic DI)"); ;
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    ConfigureAppForDevelopment(app);
}
//app.UseHsts();
app.UseHttpsRedirection();
app.UseStaticFiles();
//app.UseAuthorization();
app.UseRouting();
app.MapControllers();
app.Run();

static void AddServices(WebApplicationBuilder builder)
{
    builder.Services.AddControllers();
    builder.Services.AddAutoMapper(typeof(WebApiProfile));
    DependancyInjectionModule.RegisterServices(builder.Services);
}

static void AddSwagger(IServiceCollection services)
{
    // TODO: Configure Swagger
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Setok API", Version = "v1" });
    });
}

static void ConfigureLogging(WebApplicationBuilder builder)
{
}

static void AddDbContexts(WebApplicationBuilder builder)
{
    builder.Services.AddDbContext<SetokContext>();
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();
}

static void ConfigureAppForDevelopment(WebApplication app)
{
    app.UseCors("AllowAll");
    app.UseSwagger();
    app.UseSwaggerUI();
}