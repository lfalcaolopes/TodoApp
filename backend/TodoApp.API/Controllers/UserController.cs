using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.DTOs.User;
using TodoApp.Domain.Interfaces.Handlers;

namespace TodoApp.API.Controllers;

[ApiController]
[Route("v1/users")]
public class UserController : ControllerBase
{
    private readonly IUserHandler _handler;
    
    public UserController(IUserHandler userHandler)
    {
        _handler = userHandler;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResponseUserDto>>> Get(
        CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new GetAllUserDto(), cancellationToken);
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ResponseUserDto>> Get(
        [FromBody] GetByIdUserDto command, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, cancellationToken);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<ResponseUserDto>> Post(
        [FromBody] CreateUserDto newUser, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(newUser, cancellationToken);
        return Ok(result);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Put(
        [FromRoute] int id,[FromBody] UpdateUserDto command, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(command, id, cancellationToken);
        return Ok(result);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete([FromRoute] int id, CancellationToken cancellationToken)
    {
        var result = await _handler.HandleAsync(new DeleteUserDto(id), cancellationToken);
        return Ok(result);
    }
}