using TodoApp.Domain.Commands.Category;
using TodoApp.Domain.Commands.TodoTask;
using TodoApp.Domain.Interfaces.Results;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ITodoTaskHandler
{
   Task<CommandResult> HandleAsync(CreateTodoTaskDTO command);
   Task<CommandResult> HandleAsync(GetByIdTodoTaskDTO command);
   Task<CommandResult> HandleAsync(GetAllCategoriesDTO command);
   Task<CommandResult> HandleAsync(UpdateTodoTaskDTO command);
   Task<CommandResult> HandleAsync(DeleteTodoTaskDTO command);
}