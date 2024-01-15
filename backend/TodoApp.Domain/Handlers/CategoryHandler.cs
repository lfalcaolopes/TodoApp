using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Exceptions;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Domain.Handlers;

public class CategoryHandler : ICategoryHandler
{
    private readonly ICategoryRepository _repository;

    public CategoryHandler(ICategoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<ResponseCategoryDto> HandleAsync(CreateCategoryDto command, CancellationToken cancellationToken)
    {
        var categoryToCreate = await _repository.CreateAsync(new Category(0, command.Name, command.Color), cancellationToken);

        if(categoryToCreate.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "Category not created",
                Detail = "Category not created",
                Status = StatusCodes.Status404NotFound
            });
        }
        
        return categoryToCreate.Value;
    }

    public async Task<IEnumerable<ResponseCategoryDto>> HandleAsync(GetAllCategoriesDto command, CancellationToken cancellationToken)
    {
        var categories = await _repository.GetAsync(cancellationToken);

        if(categories.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "Categories not found",
                Detail = "Categories not found",
                Status = StatusCodes.Status404NotFound
            });
        }

        return categories.Value;
        
    }

    public async Task<ResponseCategoryDto> HandleAsync(UpdateCategoryDto command, int categoryId, CancellationToken cancellationToken)
    {
        command.Id = categoryId;

        var categoryUpdated = await _repository.UpdateAsync(command, cancellationToken);

        if(categoryUpdated.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "Category not updated",
                Detail = "Category not updated",
                Status = StatusCodes.Status404NotFound
            });
        }

        return categoryUpdated.Value;
    }

    public async Task<ResponseCategoryDto> HandleAsync(DeleteCategoryDto command, CancellationToken cancellationToken)
    {
        var categoryDeleted = await _repository.DeleteAsync(command, cancellationToken);

        if(categoryDeleted.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "Category not deleted",
                Detail = "Category not deleted",
                Status = StatusCodes.Status404NotFound
            });
        }

        return categoryDeleted.Value;
    }
}