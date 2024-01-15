namespace TodoApp.Domain.DTOs.TodoTask;

public class ResponseTodoTaskDto
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public bool IsComplete { get; set; }
    public DateTime DueDate { get; set; }
    public int CategoryId { get; set; }
    
    public ResponseTodoTaskDto(int id, string name, DateTime dueDate, bool isComplete, int categoryId)
    {
        Id = id;
        Name = name;
        DueDate = dueDate;
        CategoryId = categoryId;
        IsComplete = isComplete;
    }
}