using Microsoft.AspNetCore.Mvc;

namespace TodoApp.Domain.DTOs.TodoTask;

public class SearchTodoTaskDto
{
    [FromQuery(Name = "is_complete")]
    public bool? IsComplete { get; set; }
    [FromQuery(Name = "is_due_today")]
    public bool? IsDueToday { get; set; }
    [FromQuery(Name = "category_id")]
    public int? CategoryId { get; set; }
}