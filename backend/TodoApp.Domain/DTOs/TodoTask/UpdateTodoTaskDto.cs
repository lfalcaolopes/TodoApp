namespace TodoApp.Domain.DTOs.TodoTask;

public class UpdateTodoTaskDto
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public DateTime? DueDate { get; set; }
    
    public UpdateTodoTaskDto(int id, string? name, DateTime? dueDate)
    {
        Id = id;
        Name = name;
        DueDate = dueDate;
    }
}