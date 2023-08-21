using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Mappings;
using TodoApp.Domain.Entities;

namespace TodoApp.Data.Context;

public class TodoDataContext : DbContext
{
    public TodoDataContext(DbContextOptions<TodoDataContext> options) : base(options)
    {
    }

    public DbSet<TodoTask> TodoTasks => Set<TodoTask>();
    public DbSet<Category> Categories => Set<Category>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new TodoTaskMap());
        modelBuilder.ApplyConfiguration(new CategoryMap());
    }
}