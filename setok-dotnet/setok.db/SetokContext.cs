using Microsoft.EntityFrameworkCore;

public class SetokContext : DbContext
{
    public DbSet<Message> Messages { get; set; }
    public DbSet<Item> Items { get; set; }

    public string DbPath { get; }

    public SetokContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "setok.db");
    }

    // TODO: Implement regular database solution when available.
    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}