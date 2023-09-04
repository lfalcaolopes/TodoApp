
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Interfaces.Repositories;

public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetAsync();
    Task<Category> GetAsync(int id);
    Task<Category> CreateAsync(Category category);
    Task<Category> UpdateAsync(UpdateCategoryDto category);
    Task<Category> DeleteAsync(DeleteCategoryDto category);
}