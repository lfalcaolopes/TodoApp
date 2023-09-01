
namespace TodoApp.Domain.Entities;

public class TodoTask
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsComplete { get; set; } = false;
    public DateTime DueDate { get; set; }
    public int CategoryId { get; set; }
    public virtual Category? Category { get; set; }

    public TodoTask(string name, DateTime dueDate, int categoryId)
    {
        Name = name;
        DueDate = dueDate;
        CategoryId = categoryId;
    }
}
