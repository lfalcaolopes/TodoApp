using Microsoft.AspNetCore.Mvc;
using TodoApp.Data.Context;
using TodoApp.Data.Repositories;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Handlers;
using TodoApp.Domain.Interfaces.Results;

namespace TodoApp.API.Controllers;

[ApiController]
[Route("v1/todotasks")]
public class TodoTaskController : ControllerBase
{
    private readonly TodoDataContext _context;
    
    public TodoTaskController(TodoDataContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<CommandResult> Get()
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new GetAllTodoTaskDto());
        return result;
    }
    
    [HttpGet("{id}")]
    public async Task<CommandResult> Get([FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new GetByIdTodoTaskDto(id));
        return result;
    }
    
    [HttpPost]
    public async Task<CommandResult> Post([FromBody] CreateTodoTaskDto command)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        
        var result = await handler.HandleAsync(command);
        return result;
    }
    
    [HttpPut("{id}")]
    public async Task<CommandResult> Put([FromBody] UpdateTodoTaskDto command, [FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(command, id);
        return result;
    }
    
    [HttpDelete("{id}")]
    public async Task<CommandResult> Delete([FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new DeleteTodoTaskDto(id));
        return result;
    }
    
}