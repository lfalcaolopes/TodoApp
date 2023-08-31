using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Context;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Repositories;

namespace TodoApp.Data.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly TodoDataContext _context;

    public CategoryRepository(TodoDataContext context)
    {
        _context = context;
    }
    public async Task<Category> CreateAsync(Category category)
    {
        var categoryToCreate = category;

        await _context.Categories.AddAsync(categoryToCreate);
        await _context.SaveChangesAsync();

        return categoryToCreate;
    }

    public async Task<Category> DeleteAsync(Category category)
    {
        var categoryToDelete = _context.Categories.Find(category.Id);

        if (categoryToDelete == null)
            throw new Exception("Category to delete not found");

        _context.Categories.Remove(categoryToDelete);
        await _context.SaveChangesAsync();

        return categoryToDelete;
    }

    public async Task<IEnumerable<Category>> GetAllAsync()
    {
        return await _context.Categories.ToListAsync();
    }

    public async Task<Category> GetByIdAsync(int id)
    {
        var categoryToGet = await _context.Categories.FindAsync(id);

        if (categoryToGet == null)
            throw new Exception("Category to get not found");

        return categoryToGet;
    }

    public async Task<Category> UpdateAsync(Category category)
    {
        var categoryToUpdate = _context.Categories.Find(category.Id);

        if (categoryToUpdate == null)
            throw new Exception("Category to update not found");

        categoryToUpdate.Name = category.Name;
        categoryToUpdate.Color = category.Color;

        await _context.SaveChangesAsync();

        return categoryToUpdate;
    }
}