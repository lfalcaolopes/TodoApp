using FluentResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Context;
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Data.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly TodoDataContext _context;

    public CategoryRepository(TodoDataContext context)
    {
        _context = context;
    }
    public async Task<Result<ResponseCategoryDto>> CreateAsync(Category category, CancellationToken cancellationToken)
    {
        var createdCategory = await _context.Categories.AddAsync(category, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok(new ResponseCategoryDto(createdCategory.Entity.Id, createdCategory.Entity.Name, createdCategory.Entity.Color));
    }

    public async Task<Result<ResponseCategoryDto>> DeleteAsync(DeleteCategoryDto category, CancellationToken cancellationToken)
    {
        var categoryToDelete = await _context.Categories.FindAsync(new object?[] { category.Id }, cancellationToken);

        if (categoryToDelete == null)
            throw new Exception("Category to delete not found");

        _context.Categories.Remove(categoryToDelete);
        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok(new ResponseCategoryDto(categoryToDelete.Id, categoryToDelete.Name, categoryToDelete.Color));
    }

    public async Task<Result<IEnumerable<ResponseCategoryDto>>> GetAsync(CancellationToken cancellationToken)
    {
        var categories = await _context.Categories.ToListAsync(cancellationToken);

        return Result.Ok(categories.Select(category => new ResponseCategoryDto(category.Id, category.Name, category.Color)));
    }

    public async Task<Result<ResponseCategoryDto>> GetAsync(int id, CancellationToken cancellationToken)
    {
        var categoryToGet = await _context.Categories.FindAsync(new object?[] { id }, cancellationToken);

        if (categoryToGet == null)
            throw new Exception("Category to get not found");

        return Result.Ok(new ResponseCategoryDto(categoryToGet.Id, categoryToGet.Name, categoryToGet.Color));
    }

    public async Task<Result<ResponseCategoryDto>> UpdateAsync(UpdateCategoryDto category, CancellationToken cancellationToken)
    {
        var categoryToUpdate = await _context.Categories.FindAsync(new object?[] { category.Id }, cancellationToken);

        if (categoryToUpdate == null)
            throw new Exception("Category to update not found");

        categoryToUpdate.Name = category.Name ?? categoryToUpdate.Name;
        categoryToUpdate.Color = category.Color ?? categoryToUpdate.Color;

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok(new ResponseCategoryDto(categoryToUpdate.Id, categoryToUpdate.Name, categoryToUpdate.Color));
    }
}