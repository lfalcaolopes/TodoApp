namespace TodoApp.Domain.DTOs.TodoTask;

public class GetByIdTodoTaskDto
{
    public int Id { get; set; }
    public GetByIdTodoTaskDto(int id)
    {
        Id = id;
    }
}