
using FluentResults;
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Interfaces.Repositories;

public interface ICategoryRepository
{
    Task<Result<IEnumerable<ResponseCategoryDto>>> GetAsync(CancellationToken cancellationToken);
    Task<Result<ResponseCategoryDto>> GetAsync(int id, CancellationToken cancellationToken);
    Task<Result<ResponseCategoryDto>> CreateAsync(Category category, CancellationToken cancellationToken);
    Task<Result<ResponseCategoryDto>> UpdateAsync(UpdateCategoryDto category, CancellationToken cancellationToken);
    Task<Result<ResponseCategoryDto>> DeleteAsync(DeleteCategoryDto category, CancellationToken cancellationToken);
}