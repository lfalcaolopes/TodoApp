using Microsoft.AspNetCore.Mvc;
using TodoApp.Data.Context;
using TodoApp.Data.Repositories;
using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Handlers;

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
    public async Task<ResponseDto> Get()
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new GetAllTodoTaskDto());
        return result;
    }
    
    [HttpGet("{id:int}")]
    public async Task<ResponseDto> Get([FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new GetByIdTodoTaskDto(id));
        return result;
    }
    
    [HttpGet("search")]
    public async Task<ResponseDto> Search([FromQuery] SearchTodoTaskDto command)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        
        var result = await handler.HandleAsync(command);
        return result;
    }
    
    [HttpPost]
    public async Task<ResponseDto> Post([FromBody] CreateTodoTaskDto command)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        
        var result = await handler.HandleAsync(command);
        return result;
    }
    
    [HttpPut("{id:int}")]
    public async Task<ResponseDto> Put([FromBody] UpdateTodoTaskDto command, [FromRoute] int id)
    {
        Console.WriteLine(command);
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(command, id);
        return result;
    }
    
    [HttpDelete("{id:int}")]
    public async Task<ResponseDto> Delete([FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new DeleteTodoTaskDto(id));
        return result;
    }
    
    [HttpPatch("{id:int}/mark-as-done")]
    public async Task<ResponseDto> MarkAsDone([FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new MarkAsDoneTodoTaskDto(id));
        return result;
    }
    
    [HttpPatch("{id:int}/mark-as-undone")]
    public async Task<ResponseDto> MarkAsUndone([FromRoute] int id)
    {
        var handler = new TodoTaskHandler(new TodoTaskRepository(_context));
        var result = await handler.HandleAsync(new MarkAsUndoneTodoTaskDto(id));
        return result;
    }
}