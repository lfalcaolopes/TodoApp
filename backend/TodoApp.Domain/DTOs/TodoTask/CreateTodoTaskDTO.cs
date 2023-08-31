namespace TodoApp.Domain.Commands.TodoTask;

public class CreateTodoTaskDTO
{
    public string Name { get; set; }
    public DateTime DueDate { get; set; }
    
    public CreateTodoTaskDTO(string name, DateTime dueDate)
    {
        Name = name;
        DueDate = dueDate;
    }
}