namespace TodoApp.Domain.Commands.TodoTask;

public class UpdateTodoTaskDTO
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public DateTime? DueDate { get; set; }
    
    public UpdateTodoTaskDTO(int id, string? name, DateTime? dueDate)
    {
        Id = id;
        Name = name;
        DueDate = dueDate;
    }
}