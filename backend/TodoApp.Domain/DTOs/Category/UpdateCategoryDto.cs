namespace TodoApp.Domain.DTOs.Category;

public class UpdateCategoryDto
{
    public string? Name { get; set; }
    public string? Color { get; set; }
    
    public UpdateCategoryDto(string? name, string? color)
    {
        Name = name;
        Color = color;
    }
}