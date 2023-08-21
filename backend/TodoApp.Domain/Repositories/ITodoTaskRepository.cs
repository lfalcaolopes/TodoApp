using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Repositories;

public interface ITodoTaskRepository
{
    Task<IEnumerable<TodoTask>> GetAllAsync();
    Task<TodoTask> GetByIdAsync(int id);
    Task<TodoTask> CreateAsync(TodoTask todoTask);
    Task<TodoTask> UpdateAsync(TodoTask todoTask);
    Task<TodoTask> DeleteAsync(TodoTask todoTask);
}