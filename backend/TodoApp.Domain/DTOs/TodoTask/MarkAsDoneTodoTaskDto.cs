using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class MarkAsDoneTodoTaskDto
{
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    public bool IsComplete { get; set; } = true;
    
    public MarkAsDoneTodoTaskDto(int id)
    {
        Id = id;
    }
    
}