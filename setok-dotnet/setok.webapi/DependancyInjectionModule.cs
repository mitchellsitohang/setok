using System.Reflection;

internal static class DependancyInjectionModule
{
    internal static void RegisterServices(IServiceCollection services)
    {
        RegisterLoggers(services);
        services.AddScoped<SetokContext>();
        services.AddScoped<IMessageService, MessageService>();
        services.AddScoped<IItemService, ItemService>();
        services.AddScoped<IDateTimeService, DateTimeService>();
        services.AddScoped<IStopwatchService, StopwatchService>();
        services.AddScoped<IRegistrationService, RegistrationService>();
    }

    internal static void RegisterLogger<T>(IServiceCollection services)
    {
        services.AddScoped<ILoggerService<T>, LoggerService<T>>();
    }

    // M: 
    // Reflection magic, get types that have IHasLogger interface. 
    // Register them as scoped services with implementation class accordingly." 
    private static void RegisterLoggers(IServiceCollection services)
    {
        MethodInfo method = GetRegisterLoggerMethod();

        GetIHasLoggerTypes()
            .ToList()
            .ForEach(type =>
            {
                method?.MakeGenericMethod(type).Invoke(null, new object[] { services });
            });

        static MethodInfo GetRegisterLoggerMethod()
        {
            return typeof(DependancyInjectionModule)
                .GetRuntimeMethods()
                .First(m => m.Name == nameof(RegisterLogger));
        }
    }

    private static IEnumerable<Type> GetIHasLoggerTypes() =>
        Assembly
        .GetExecutingAssembly()
        .GetTypes()
        .Where(type => typeof(IHasLogger)
        .IsAssignableFrom(type));
}