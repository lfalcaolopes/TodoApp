namespace TodoApp.Domain.Commands.TodoTask;

public class CreateTodoTaskDTO
{
    public string Name { get; set; }
    public DateTime DueDate { get; set; }
    public int CategoryId { get; set; }
    
    public CreateTodoTaskDTO(string name, DateTime dueDate, int categoryId)
    {
        Name = name;
        DueDate = dueDate;
        CategoryId = categoryId;
    }
}