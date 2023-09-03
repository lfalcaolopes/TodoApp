namespace TodoApp.Domain.DTOs.TodoTask;

public class MarkAsDoneTodoTaskDto
{
    public int Id { get; set; }
    public bool IsComplete { get; set; } = true;
    
    public MarkAsDoneTodoTaskDto(int id)
    {
        Id = id;
    }
    
}