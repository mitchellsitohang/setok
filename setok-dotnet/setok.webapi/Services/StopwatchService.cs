using System.Diagnostics;

public class StopwatchService : IStopwatchService
{
    private ILogger logger;
    private Stopwatch stopwatch;

    public StopwatchService(ILogger<StopwatchService> logger)  
    {
        this.logger = logger;
        stopwatch = new Stopwatch();
        stopwatch.Start();
    }

    public void Dispose()
    {
        stopwatch.Stop();
        logger.LogInformation($"Time elapsed: {stopwatch.Elapsed.TotalSeconds} seconds.");
    }
}