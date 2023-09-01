using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Interfaces.Results;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ITodoTaskHandler
{
   Task<CommandResult> HandleAsync(CreateTodoTaskDto command);
   Task<CommandResult> HandleAsync(GetByIdTodoTaskDto command);
   Task<CommandResult> HandleAsync(GetAllTodoTaskDto command);
   Task<CommandResult> HandleAsync(UpdateTodoTaskDto command, int id);
   Task<CommandResult> HandleAsync(DeleteTodoTaskDto command);
}