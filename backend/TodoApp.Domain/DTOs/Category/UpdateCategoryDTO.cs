namespace TodoApp.Domain.Commands.Category;

public class UpdateCategoryDTO
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Color { get; set; }
    
    public UpdateCategoryDTO(int id, string? name, string? color)
    {
        Id = id;
        Name = name;
        Color = color;
    }
}