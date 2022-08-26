using Microsoft.EntityFrameworkCore;

class MessageService : IMessageService, IHasLogger
{
    private ILoggerService<MessageService> Logger { get; }
    private SetokContext DbContext { get; }

    public MessageService(ILoggerService<MessageService> logger, SetokContext dbContext)
    {
        Logger = logger;
        DbContext = dbContext;
    }

    public async Task<bool> CreateMessageAsync(string message)
    {
        using(Logger.BeginScope(nameof(CreateMessageAsync)));
        try
        {
            await DbContext.AddAsync(new Message(message));
            await DbContext.SaveChangesAsync();
            Logger.LogInformation("Saved message to DB: " + message); 
        }
        catch (Exception exception)
        {
            Logger.LogError($"Exception thrown: {nameof(CreateMessageAsync)} {message} {exception.Message}");
            return false;
        }

        return true;
    }

    public async Task<IEnumerable<Message>> GetMessagesAsync()
    {
        var messages = new List<Message>();
        try
        {
            messages = await DbContext.Messages.ToListAsync();
        }
        catch (Exception exception)
        {
            Logger.LogError($"Exception thrown: {nameof(GetMessagesAsync)} {exception.Message}");
            throw exception;
        }
        return messages;
    }

    public Task<string> DeleteMessage(int id)
    {
        throw new NotImplementedException();
    }

    public Task<string> GetMessage(int id)
    {
        throw new NotImplementedException();
    }

    public Task<string> UpdateMessage(string message)
    {
        throw new NotImplementedException();
    }
}