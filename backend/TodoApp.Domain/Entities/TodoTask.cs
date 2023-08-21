
namespace TodoApp.Domain.Entities;

public class TodoTask
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsComplete { get; set; }
    public DateTime DueDate { get; set; }
    public Category Category { get; set; }

    protected TodoTask(string name, bool isComplete, DateTime dueDate)
    {
        Name = name;
        IsComplete = isComplete;
        DueDate = dueDate;
        Category = null!;
    }
    public TodoTask(string name, bool isComplete, DateTime dueDate, Category category)
    {
        Name = name;
        IsComplete = isComplete;
        DueDate = dueDate;
        Category = category;
    }
}
