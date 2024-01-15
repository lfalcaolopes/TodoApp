using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class ToggleCompletionDto
{
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    
    public ToggleCompletionDto(int id)
    {
        Id = id;
    }
    
}