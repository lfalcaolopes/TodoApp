using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Entities;
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

    public async Task<ResponseDto> HandleAsync(CreateCategoryDto command)
    {
        try
        {
            var categoryToCreate = await _repository.CreateAsync(new Category(0, command.Name, command.Color));

            return new ResponseDto(true, new[] { categoryToCreate });
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new[] { ex.Message });
        }
    }

    public async Task<ResponseDto> HandleAsync(GetAllCategoriesDto command)
    {
        try
        {
            var categories = await _repository.GetAsync();

            return new ResponseDto(true, categories);
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new[] { ex.Message });
        }
    }

    public async Task<ResponseDto> HandleAsync(UpdateCategoryDto command, int categoryId)
    {
        try
        {
            command.Id = categoryId;

            var categoryUpdated = await _repository.UpdateAsync(command);

            return new ResponseDto(true, new[] { categoryUpdated });
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new[] { ex.Message });
        }
    }

    public async Task<ResponseDto> HandleAsync(DeleteCategoryDto command)
    {
        try
        {
            var categoryDeleted = await _repository.DeleteAsync(command);

            return new ResponseDto(true, new[] { categoryDeleted });
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new[] { ex.Message });
        }
    }
}