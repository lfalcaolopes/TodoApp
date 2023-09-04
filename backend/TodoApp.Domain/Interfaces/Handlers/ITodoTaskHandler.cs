using System.Linq.Expressions;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Results;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ITodoTaskHandler
{
   Task<CommandResult> HandleAsync(CreateTodoTaskDto command);
   Task<CommandResult> HandleAsync(GetByIdTodoTaskDto command);
   Task<CommandResult> HandleAsync(GetAllTodoTaskDto command);
   // Task<CommandResult> HandleAsync(Expression<Func<TodoTask, bool>> lambda);
   Task<CommandResult> HandleAsync(SearchTodoTaskDto command);
   Task<CommandResult> HandleAsync(UpdateTodoTaskDto command, int id);
   Task<CommandResult> HandleAsync(DeleteTodoTaskDto command);
   Task<CommandResult> HandleAsync(MarkAsDoneTodoTaskDto command);
   Task<CommandResult> HandleAsync(MarkAsUndoneTodoTaskDto command);
}