public class DateTimeService : IDateTimeService
{
    public DateTime GetDateTimeNow() 
    {
        return DateTime.Now;
    }
}