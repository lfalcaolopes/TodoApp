namespace TodoApp.Domain.Entities;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Color { get; set; } = null!;
    public IEnumerable<TodoTask> TodoTasks { get; set; }

    protected Category(string name, string color)
    {
        Name = name;
        Color = color;
        TodoTasks = null!;
    }

    public Category(string name, string color, IEnumerable<TodoTask> todoTasks)
    {
        Name = name;
        Color = color;
        TodoTasks = todoTasks;
    }
}