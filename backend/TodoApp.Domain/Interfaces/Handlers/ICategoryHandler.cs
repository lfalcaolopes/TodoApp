using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.Category;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ICategoryHandler
{
   Task<ResponseDto> HandleAsync(CreateCategoryDto command);
   Task<ResponseDto> HandleAsync(GetAllCategoriesDto command);
   Task<ResponseDto> HandleAsync(UpdateCategoryDto command, int categoryId);
   Task<ResponseDto> HandleAsync(DeleteCategoryDto command);
}