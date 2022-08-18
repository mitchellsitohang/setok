using System.Reflection;

internal static class DependancyInjectionModule
{
    internal static void RegisterServices(IServiceCollection services) 
    {
        RegisterLogging(services);
        services.AddScoped<SetokContext>();
        services.AddScoped<IMessageService, MessageService>();
        services.AddScoped<IItemService, ItemService>();
        services.AddScoped<IDateTimeService, DateTimeService>();
        services.AddScoped<IStopwatchService, StopwatchService>();
        
    }

    private static void RegisterLogging(IServiceCollection services)
    {
        services.AddScoped<ILoggerService<MessageService>, LoggerService<MessageService>>();
        services.AddScoped<ILoggerService<ItemService>, LoggerService<ItemService>>();
        services.AddScoped<ILoggerService<DateTimeService>, LoggerService<DateTimeService>>();
        services.AddScoped<ILoggerService<ItemController>, LoggerService<ItemController>>();
        services.AddScoped<ILoggerService<HomeController>, LoggerService<HomeController>>();
        GetControllers();
    }

    private static void GetControllers() 
    {
        var controlleractionlist =  Assembly.GetExecutingAssembly().GetTypes()
        .Where(type=> typeof(Microsoft.AspNetCore.Mvc.ControllerBase).IsAssignableFrom(type));
        
        var loggers =  Assembly.GetExecutingAssembly().GetTypes()
        .Where(type=> typeof(IHasLogger).IsAssignableFrom(type));
    }
}