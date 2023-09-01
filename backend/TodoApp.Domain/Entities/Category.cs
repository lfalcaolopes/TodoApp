namespace TodoApp.Domain.Entities;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Color { get; set; }
    public virtual IEnumerable<TodoTask>? TodoTasks { get; set; }

    public Category(string name, string color)
    {
        Name = name;
        Color = color;
    }
}