namespace TodoApp.Domain.DTOs.User;

public class UpdateUserDto
{
    public int Id { get; set; }
    public string? Name { get; set; } = null!;
    public string? Email { get; set; } = null!;
    public string? Password { get; set; } = null!;

    public UpdateUserDto(int id, string? name, string? email, string? password)
    {
        Id = id;
        Name = name;
        Email = email;
        Password = password;
    }
}