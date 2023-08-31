namespace TodoApp.Domain.Commands.TodoTask;

public class DeleteTodoTaskDTO
{
    public int Id { get; set; }
    public DeleteTodoTaskDTO(int id)
    {
        Id = id;
    }
}