using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.DTOs.Category;
using TodoApp.Domain.Interfaces.Handlers;

namespace TodoApp.API.Controllers;

[ApiController]
[Route("v1/categories")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryHandler _handler;
    
    public CategoryController(ICategoryHandler categoryHandler)
    {
        _handler = categoryHandler;
    }
    
    [HttpGet]
    public async Task<ActionResult<ResponseCategoryDto>> Get(CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new GetAllCategoriesDto(), cancellationToken);
        return Ok(result);
    }
    
    [HttpPost]
    public async Task<ActionResult<ResponseCategoryDto>> Post([FromBody] CreateCategoryDto command, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, cancellationToken);
        return Ok(result);
    }
    
    [HttpPut("{id:int}")]
    public async Task<ActionResult<ResponseCategoryDto>> Put([FromBody] UpdateCategoryDto command, [FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, id, cancellationToken);
        return Ok(result);
    }
    
    [HttpDelete("{id:int}")]
    public async Task<ActionResult<ResponseCategoryDto>> Delete([FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new DeleteCategoryDto(id), cancellationToken);
        return Ok(result);
    }
}