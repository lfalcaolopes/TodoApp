using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class MarkAsUndoneTodoTaskDto
{
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    public bool IsComplete { get; set; } = false;
    
    public MarkAsUndoneTodoTaskDto(int id)
    {
        Id = id;
    }
}