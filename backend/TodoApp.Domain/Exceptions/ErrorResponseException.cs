using Microsoft.AspNetCore.Mvc;

namespace TodoApp.Domain.Exceptions;

public class ErrorResponseException : Exception
{
    public int HttpStatus { get; set; }
    public ProblemDetails ProblemDetails { get; set; }

    public ErrorResponseException(int httpStatus, ProblemDetails problemDetails)
    {
        HttpStatus = httpStatus;
        ProblemDetails = problemDetails;
    }
}
