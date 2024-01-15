using System.ComponentModel.DataAnnotations;
using TodoApp.Domain.Validations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class UpdateTodoTaskDto
{
    
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    [StringLength(40, ErrorMessage = "Name can't be longer than 40 characters")]
    public string? Name { get; set; }
    [DateInFuture]
    public DateTime? DueDate { get; set; }
    public bool? ToggleIsComplete { get; set; }
    
    public UpdateTodoTaskDto(int id, string? name, DateTime? dueDate, bool? shouldToggleIsComplete)
    {
        Id = id;
        Name = name;
        DueDate = dueDate;
        ToggleIsComplete = shouldToggleIsComplete;
    }
}