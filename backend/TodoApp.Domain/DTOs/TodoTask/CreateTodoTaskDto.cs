using System.ComponentModel.DataAnnotations;
using TodoApp.Domain.Validations;

namespace TodoApp.Domain.DTOs.TodoTask;

public class CreateTodoTaskDto
{
    [Required(ErrorMessage = "Name is required", AllowEmptyStrings = false)]
    [StringLength(40, ErrorMessage = "Name can't be longer than 40 characters")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Due date is required")]
    [DateInFuture]
    public DateTime DueDate { get; set; }

    [Required(ErrorMessage = "Category is required")]
    public int CategoryId { get; set; }

    public CreateTodoTaskDto(string name, DateTime dueDate, int categoryId)
    {
        Name = name;
        DueDate = dueDate;
        CategoryId = categoryId;
    }
}