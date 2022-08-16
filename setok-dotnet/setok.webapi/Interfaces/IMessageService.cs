public interface IMessageService
{
    Task<string> GetMessage(int id);
    Task<IEnumerable<Message>> GetMessagesAsync();
    Task<bool> CreateMessageAsync(string message);
    Task<string> UpdateMessage(string message);
    Task<string> DeleteMessage(int id);
}