using TodoApp.Domain.DTOs.Category;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ICategoryHandler
{
   Task<ResponseCategoryDto> HandleAsync(CreateCategoryDto command, CancellationToken cancellationToken);
   Task<IEnumerable<ResponseCategoryDto>> HandleAsync(GetAllCategoriesDto command, CancellationToken cancellationToken);
   Task<ResponseCategoryDto> HandleAsync(UpdateCategoryDto command, int categoryId, CancellationToken cancellationToken);
   Task<ResponseCategoryDto> HandleAsync(DeleteCategoryDto command, CancellationToken cancellationToken);
}