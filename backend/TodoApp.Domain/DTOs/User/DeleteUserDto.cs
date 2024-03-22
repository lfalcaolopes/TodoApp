namespace TodoApp.Domain.DTOs.User;

public class DeleteUserDto
{
    public int Id { get; set; }

    public DeleteUserDto(int id)
    {
        Id = id;
    }
}