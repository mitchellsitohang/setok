using Microsoft.EntityFrameworkCore;

class MessageService : IMessageService
{
    private SetokContext dbContext { get; }

    public MessageService(SetokContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task<bool> CreateMessageAsync(string message)
    {
        try
        {
            await dbContext.AddAsync(new Message(message));
            await dbContext.SaveChangesAsync();
        }
        catch (Exception exception)
        {
            System.Console.WriteLine(exception.Message);
            return false;
        }

        return true;
    }

    public async Task<IEnumerable<Message>> GetMessagesAsync()
    {
        var messages = await dbContext.Messages.ToListAsync();
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