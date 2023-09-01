using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodoApp.Domain.Entities;

namespace TodoApp.Data.Mappings;

public class CategoryMap : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.ToTable("Category");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
        builder.Property(x => x.Name).IsRequired().HasMaxLength(20);
        builder.Property(x => x.Color).IsRequired().HasMaxLength(7);
        builder.HasMany(x => x.TodoTasks).WithOne(x => x.Category).HasForeignKey(x => x.CategoryId);
    }
}