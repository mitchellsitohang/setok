public class Message
{
    public int id { get; set; }
    public string Content { get; set; }

    public Message(string content)
    {
        Content = content;
    }
}