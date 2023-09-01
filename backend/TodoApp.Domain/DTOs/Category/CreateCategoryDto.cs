namespace TodoApp.Domain.DTOs.Category;

public class CreateCategoryDto
{
    public string Name { get; set; }
    public string Color { get; set; }
    
    public CreateCategoryDto(string name, string color)
    {
        Name = name;
        Color = color;
    }
}