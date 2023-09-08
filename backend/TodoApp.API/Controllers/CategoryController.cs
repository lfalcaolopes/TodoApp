using Microsoft.AspNetCore.Mvc;
using TodoApp.Data.Context;
using TodoApp.Data.Repositories;
using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Handlers;

namespace TodoApp.API.Controllers;

[ApiController]
[Route("v1/categories")]
public class CategoryController : ControllerBase
{
    private readonly TodoDataContext _context;
    
    public CategoryController(TodoDataContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ResponseDto> Get()
    {
        var handler = new CategoryHandler(new CategoryRepository(_context));
        var result = await handler.HandleAsync(new GetAllCategoriesDto());
        return result;
    }
    
    [HttpPost]
    public async Task<ResponseDto> Post([FromBody] CreateCategoryDto command)
    {
        var handler = new CategoryHandler(new CategoryRepository(_context));
        var result = await handler.HandleAsync(command);
        return result;
    }
    
    [HttpPut("{id}")]
    public async Task<ResponseDto> Put([FromBody] UpdateCategoryDto command, [FromRoute] int id)
    {
        var handler = new CategoryHandler(new CategoryRepository(_context));
        var result = await handler.HandleAsync(command, id);
        return result;
    }
    
    [HttpDelete("{id}")]
    public async Task<ResponseDto> Delete([FromRoute] int id)
    {
        var handler = new CategoryHandler(new CategoryRepository(_context));
        var result = await handler.HandleAsync(new DeleteCategoryDto(id));
        return result;
    }
}