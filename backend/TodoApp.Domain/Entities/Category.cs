namespace TodoApp.Domain.Entities;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Color { get; set; }
    public virtual IEnumerable<TodoTask>? TodoTasks { get; set; }

    public Category(int id, string name, string color)
    {
        Id = id;
        Name = name;
        Color = color;
    }
}