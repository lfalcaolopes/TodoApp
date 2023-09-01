namespace TodoApp.Domain.DTOs.TodoTask;

public class DeleteTodoTaskDto
{
    public int Id { get; set; }
    public DeleteTodoTaskDto(int id)
    {
        Id = id;
    }
}