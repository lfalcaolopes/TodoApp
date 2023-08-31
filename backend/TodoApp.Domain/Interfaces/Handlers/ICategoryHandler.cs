using TodoApp.Domain.Commands.Category;
using TodoApp.Domain.Interfaces.Results;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ICategoryHandler
{
   Task<CommandResult> HandleAsync(CreateCategoryDTO command);
   Task<CommandResult> HandleAsync(GetAllCategoriesDTO command);
   Task<CommandResult> HandleAsync(UpdateCategoryDTO command);
   Task<CommandResult> HandleAsync(DeleteCategoryDTO command);
}