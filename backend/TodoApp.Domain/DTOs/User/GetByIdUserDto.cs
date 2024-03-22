namespace TodoApp.Domain.DTOs.User;

public class GetByIdUserDto
{
    public int Id { get; set; }

    public GetByIdUserDto(int id)
    {
        Id = id;
    }
}