using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Interfaces.Results;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ICategoryHandler
{
   Task<CommandResult> HandleAsync(CreateCategoryDto command);
   Task<CommandResult> HandleAsync(GetAllCategoriesDto command);
   Task<CommandResult> HandleAsync(UpdateCategoryDto command, int categoryId);
   Task<CommandResult> HandleAsync(DeleteCategoryDto command);
}