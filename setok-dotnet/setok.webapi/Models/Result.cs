public class SetokResult
{
    public string? Message { get; set; }
    public string? Date { get; set; }

    public SetokResult(string messsage)
    {
        Message = messsage;
        Date = DateTime.UtcNow.ToString();
    }
}
