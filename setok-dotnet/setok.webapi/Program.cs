var builder = WebApplication.CreateBuilder(args);
AddServices(builder);
var app = builder.Build();

// TODO: Configure the development environment.
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();

void AddServices(WebApplicationBuilder builder)
{
    // TODO: When list gets too big or custom seperate in files
    // Add services to the container.
    builder.Services.AddControllers();
    builder.Services.AddScoped<SetokContext>();
    builder.Services.AddScoped<IMessageService, MessageService>();

    // TODO: Configure Swagger
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}