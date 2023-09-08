using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class DeleteTodoTaskDto
{
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    public DeleteTodoTaskDto(int id)
    {
        Id = id;
    }
}