public static class Properties<T> where T: class, new()
{
    public static string[] properties = new T()
            .GetType()
            .GetProperties()
            .Select(p => p.Name)
            .ToArray();
}