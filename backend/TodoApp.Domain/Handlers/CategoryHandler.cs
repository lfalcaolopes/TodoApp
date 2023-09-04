using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Results;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Domain.Handlers;

public class CategoryHandler : ICategoryHandler
{
    private readonly ICategoryRepository _repository;

    public CategoryHandler(ICategoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<CommandResult> HandleAsync(CreateCategoryDto command)
    {
        try
        {
            var categoryToCreate = await _repository.CreateAsync(new Category(0, command.Name, command.Color));
            
            return new CommandResult(true, "Category created successfully", categoryToCreate);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(GetAllCategoriesDto command)
    {
        try
        {
            var categories = await _repository.GetAsync();
            
            return new CommandResult(true, "Categories retrieved successfully", categories);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(UpdateCategoryDto command, int categoryId)
    {
        try
        {
            command.Id = categoryId;

            var categoryUpdated = await _repository.UpdateAsync(command);

            return new CommandResult(true, "Category updated successfully", categoryUpdated);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(DeleteCategoryDto command)
    {
        try
        {
            var categoryDeleted = await _repository.DeleteAsync(command);

            return new CommandResult(true, "Category deleted successfully", categoryDeleted);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }
}