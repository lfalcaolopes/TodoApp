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