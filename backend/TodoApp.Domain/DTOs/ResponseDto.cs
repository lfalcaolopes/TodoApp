namespace TodoApp.Domain.DTOs;

public class ResponseDto
{
    public bool Success { get; set; }
    public IEnumerable<object> Data { get; set; }
    
    public ResponseDto(bool success, IEnumerable<object> data)
    {
        Success = success;
        Data = data;
    }}


// using Microsoft.AspNetCore.Mvc;

// namespace TodoApp.Domain.DTOs;

// public class ResponseDto<TResponse>
// {
//     public int StatusCode { get; set; }
//     public TResponse? Data { get; set; }
//     public ProblemDetails? ProblemDetails { get; set; }
// }