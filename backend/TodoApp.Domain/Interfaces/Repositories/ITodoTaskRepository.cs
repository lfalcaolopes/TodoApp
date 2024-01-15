using System.Linq.Expressions;
using FluentResults;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Interfaces.Repositories;

public interface ITodoTaskRepository
{
    Task<Result<IEnumerable<ResponseTodoTaskDto>>> GetAsync(CancellationToken cancellationToken);
    Task<Result<ResponseTodoTaskDto>> GetAsync(int id, CancellationToken cancellationToken);
    Task<Result<IEnumerable<ResponseTodoTaskDto>>> GetAsync(Expression<Func<TodoTask, bool>> lambda, CancellationToken cancellationToken);
    Task<Result<ResponseTodoTaskDto>> CreateAsync(TodoTask todoTask, CancellationToken cancellationToken);
    Task<Result<ResponseTodoTaskDto>>UpdateAsync(UpdateTodoTaskDto todoTask, CancellationToken cancellationToken);
    Task<Result<ResponseTodoTaskDto>> DeleteAsync(DeleteTodoTaskDto todoTask, CancellationToken cancellationToken);
}