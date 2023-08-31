namespace TodoApp.Domain.Commands.Category;

public class CreateCategoryDTO
{
    public string Name { get; set; }
    public string Color { get; set; }
    
    public CreateCategoryDTO(string name, string color)
    {
        Name = name;
        Color = color;
    }
}