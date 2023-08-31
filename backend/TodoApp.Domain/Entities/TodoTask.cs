
namespace TodoApp.Domain.Entities;

public class TodoTask
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsComplete { get; set; } = false;
    public DateTime DueDate { get; set; }
    public Category Category { get; set; }

    protected TodoTask(string name,  DateTime dueDate)
    {
        Name = name;
        DueDate = dueDate;
        Category = null!;
    }
    public TodoTask(string name, DateTime dueDate, Category category)
    {
        Name = name;
        DueDate = dueDate;
        Category = category;
    }
}
