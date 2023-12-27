using System.Linq.Expressions;
using FluentResults;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Interfaces.Repositories;

public interface ITodoTaskRepository
{
    Task<IEnumerable<TodoTask>> GetAsync();
    Task<Result<TodoTask>> GetAsync(int id);
    Task<IEnumerable<TodoTask>> GetAsync(Expression<Func<TodoTask, bool>> lambda);
    Task<TodoTask> CreateAsync(TodoTask todoTask);
    Task<TodoTask> UpdateAsync(UpdateTodoTaskDto todoTask);
    Task<TodoTask> DeleteAsync(DeleteTodoTaskDto todoTask);
}