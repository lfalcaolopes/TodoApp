using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.Entities;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public List<TodoTask> TodoTasks { get; set; } = new List<TodoTask>();

    public User(int id, string username, string email, string password)
    {
        Id = id;
        Username = username;
        Email = email;
        Password = password;
        CreatedAt = DateTime.Now;
    }
}
