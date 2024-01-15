namespace TodoApp.Domain.DTOs.Category;

public class ResponseCategoryDto
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Color { get; set; }
    
    public ResponseCategoryDto(int id, string name, string color)
    {
        Id = id;
        Name = name;
        Color = color;
    }
}