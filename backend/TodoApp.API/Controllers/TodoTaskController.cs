using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Interfaces.Handlers;

namespace TodoApp.API.Controllers;

[ApiController]
[Route("v1/todotasks")]
public class TodoTaskController : ControllerBase
{
    private readonly ITodoTaskHandler _handler;

    public TodoTaskController(ITodoTaskHandler todoTaskHandler)
    {
        _handler = todoTaskHandler;
    }

    [HttpGet]
    public async Task<ActionResult<ResponseTodoTaskDto>> Get(CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new GetAllTodoTaskDto(), cancellationToken);
        return Ok(result);
    }
    
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ResponseTodoTaskDto>> Get([FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new GetByIdTodoTaskDto(id), cancellationToken);

        return Ok(result);
    }
    
    [HttpGet("search")]
    public async Task<ActionResult<ResponseTodoTaskDto>> Search([FromQuery] SearchTodoTaskDto command, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, cancellationToken);

        return Ok(result);
    }
    
    [HttpPost]
    public async Task<ActionResult<ResponseTodoTaskDto>> Post([FromBody] CreateTodoTaskDto command, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, cancellationToken);

        return Ok(result);
    }
    
    [HttpPut("{id:int}")]
    public async Task<ActionResult<ResponseTodoTaskDto>> Put([FromBody] UpdateTodoTaskDto command, [FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, id, cancellationToken);

        return Ok(result);
    }
    
    [HttpDelete("{id:int}")]
    public async Task<ActionResult<ResponseTodoTaskDto>> Delete([FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new DeleteTodoTaskDto(id), cancellationToken);

        return Ok(result);
    }
    
    [HttpPatch("{id:int}/mark-as-done")]
    public async Task<ActionResult<ResponseTodoTaskDto>> MarkAsDone([FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new MarkAsDoneTodoTaskDto(id), cancellationToken);

        return Ok(result);
    }
    
    [HttpPatch("{id:int}/mark-as-undone")]
    public async Task<ActionResult<ResponseTodoTaskDto>>AsUndone([FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new MarkAsUndoneTodoTaskDto(id), cancellationToken);

        return Ok(result);
    }
}