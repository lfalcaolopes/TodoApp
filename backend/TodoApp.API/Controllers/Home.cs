using Microsoft.AspNetCore.Mvc;

namespace TodoApp.API.Controllers;

[ApiController]
[Route("")]
public class Home : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("API is running...");
    }
    
}