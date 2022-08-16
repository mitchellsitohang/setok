﻿using Microsoft.EntityFrameworkCore;

public class SetokContext : DbContext
{
    public DbSet<Message> Messages { get; set; }

    public string DbPath { get; }

    public SetokContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "blogging.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}

public class Message
{
    public int id { get; set; }
    public string Content { get; set; }

    public Message(string content)
    {
        Content = content;
    }
}