namespace TodoApp.Domain.DTOs.TodoTask;

public class MarkAsUndoneTodoTaskDto
{
    public int Id { get; set; }
    public bool IsComplete { get; set; } = false;
    
    public MarkAsUndoneTodoTaskDto(int id)
    {
        Id = id;
    }
}