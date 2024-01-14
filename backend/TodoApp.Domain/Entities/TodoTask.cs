
namespace TodoApp.Domain.Entities;

public class TodoTask
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsComplete { get; set; }
    public DateTime DueDate { get; set; }
    public int CategoryId { get; set; }
    public Category? Category { get; set; }

    public TodoTask(int id, string name, DateTime dueDate, int categoryId, bool isComplete = false)
    {
        Id = id;
        Name = name;
        DueDate = dueDate;
        CategoryId = categoryId;
        IsComplete = isComplete;
    }
}
