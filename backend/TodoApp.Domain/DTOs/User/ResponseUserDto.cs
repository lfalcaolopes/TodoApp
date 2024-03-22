namespace TodoApp.Domain.DTOs.User;

public class ResponseUserDto
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;

    public ResponseUserDto(int id, string name, string email)
    {
        Id = id;
        Name = name;
        Email = email;
    }
}    