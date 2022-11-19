public class LoggerService<T> : ILoggerService<T>
{
    public ILogger Logger { get; }
    private IDateTimeService DateTimeService { get; }
    private IStopwatchService StopwatchService { get; }
    private string? action;

    public LoggerService(IDateTimeService dateTimeService, ILogger<T> logger, IStopwatchService stopwatchService)
    {
        DateTimeService = dateTimeService;
        Logger = logger;
        StopwatchService = stopwatchService;
        action = string.Empty;
    }

    public void Dispose()
    {
        Logger.LogInformation($"Ending: {action}");
    }

    public IDisposable BeginScope<TState>(TState action)
    {
        this.action = action?.ToString();
        var dateTimeNow = DateTimeService.GetDateTimeNow();
        Logger.LogInformation($"Starting: {this.action} {dateTimeNow.ToShortDateString()} {dateTimeNow.ToShortTimeString()}");
        using(StopwatchService) 
        {
            return Logger.BeginScope(action);
        }
    }

    public bool IsEnabled(LogLevel logLevel)
    {
        return Logger.IsEnabled(logLevel);
    }

    public void Log<T>(LogLevel logLevel, EventId eventId, T state, Exception? exception, Func<T, Exception?, string> formatter)
    {
        Logger.Log<T>(logLevel, eventId, state, exception, formatter);        
    }
}