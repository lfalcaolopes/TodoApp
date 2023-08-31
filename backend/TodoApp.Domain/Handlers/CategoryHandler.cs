using TodoApp.Domain.Commands;
using TodoApp.Domain.Commands.Category;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Results;
using TodoApp.Domain.Repositories;

namespace TodoApp.Domain.Handlers;

public class CategoryHandler : ICategoryHandler
{
    private readonly ICategoryRepository _repository;

    public CategoryHandler(ICategoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<CommandResult> HandleAsync(CreateCategoryDTO command)
    {
        try
        {
            var categoryToCreate = await _repository.CreateAsync(new Category(command.Name, command.Color, new List<TodoTask>()));

            return new CommandResult(true, "Category created successfully", categoryToCreate);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(GetAllCategoriesDTO command)
    {
        try
        {
            var categories = await _repository.GetAllAsync();

            return new CommandResult(true, "Categories retrieved successfully", categories);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(UpdateCategoryDTO command)
    {
        try
        {
            var categoryToUpdate = await _repository.GetByIdAsync(command.Id);

            if(command.Name != null)
                categoryToUpdate.Name = command.Name;
            
            if(command.Color != null)
                categoryToUpdate.Color = command.Color;

            var categoryUpdated = await _repository.UpdateAsync(categoryToUpdate);

            return new CommandResult(true, "Category updated successfully", categoryUpdated);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(DeleteCategoryDTO command)
    {
        try
        {
            var categoryToDelete = await _repository.GetByIdAsync(command.Id);

            var categoryDeleted = await _repository.DeleteAsync(categoryToDelete);

            return new CommandResult(true, "Category deleted successfully", categoryDeleted);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }
}