
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.Exceptions;

namespace TodoApp.API.Middlewares;

public class ErrorResponseMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext httpContext, RequestDelegate next)
    {
        try
        {
            await next(httpContext);
        }
        catch (ErrorResponseException e)
        {
            await CreateErrorResponse(e).ExecuteAsync(httpContext);
        }
    }

    private static IResult CreateErrorResponse(ErrorResponseException exception)
    {
        return Results.Json(exception.ProblemDetails, statusCode: exception.HttpStatus);
    }
}
