using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class GetByIdTodoTaskDto
{
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    public GetByIdTodoTaskDto(int id)
    {
        Id = id;
    }
}