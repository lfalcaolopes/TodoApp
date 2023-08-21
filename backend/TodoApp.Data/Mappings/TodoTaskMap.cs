using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodoApp.Domain.Entities;

namespace TodoApp.Data.Mappings;

public class TodoTaskMap : IEntityTypeConfiguration<TodoTask>
{
    public void Configure(EntityTypeBuilder<TodoTask> builder)
    {
        builder.ToTable("TodoTask");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
        builder.Property(x => x.Name).IsRequired().HasMaxLength(40);
        builder.Property(x => x.IsComplete).IsRequired();
        builder.Property(x => x.DueDate).IsRequired();
        builder.HasOne(x => x.Category).WithMany(x => x.TodoTasks).HasForeignKey(x => x.Id);
    }
}