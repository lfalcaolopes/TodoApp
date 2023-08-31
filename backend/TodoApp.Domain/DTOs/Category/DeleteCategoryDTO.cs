namespace TodoApp.Domain.Commands.Category;

public class DeleteCategoryDTO
{
    public int Id { get; set; }
    public DeleteCategoryDTO(int id)
    {
        Id = id;
    }
}