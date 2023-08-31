namespace TodoApp.Domain.Commands.TodoTask;

public class GetByIdTodoTaskDTO
{
    public int Id { get; set; }
    public GetByIdTodoTaskDTO(int id)
    {
        Id = id;
    }
}