namespace TodoApp.Domain.DTOs.Category;

public class DeleteCategoryDto
{
    public int Id { get; set; }
    public DeleteCategoryDto(int id)
    {
        Id = id;
    }
}