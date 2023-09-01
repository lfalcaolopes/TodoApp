namespace TodoApp.Domain.DTOs.TodoTask;

public class CreateTodoTaskDto
{
    public string Name { get; set; }
    public DateTime DueDate { get; set; }
    public int CategoryId { get; set; }
    
    public CreateTodoTaskDto(string name, DateTime dueDate, int categoryId)
    {
        Name = name;
        DueDate = dueDate;
        CategoryId = categoryId;
    }
}