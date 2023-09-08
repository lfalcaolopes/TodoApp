using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.TodoTask;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ITodoTaskHandler
{
   Task<ResponseDto> HandleAsync(CreateTodoTaskDto command);
   Task<ResponseDto> HandleAsync(GetByIdTodoTaskDto command);
   Task<ResponseDto> HandleAsync(GetAllTodoTaskDto command);
   Task<ResponseDto> HandleAsync(SearchTodoTaskDto command);
   Task<ResponseDto> HandleAsync(UpdateTodoTaskDto command, int id);
   Task<ResponseDto> HandleAsync(DeleteTodoTaskDto command);
   Task<ResponseDto> HandleAsync(MarkAsDoneTodoTaskDto command);
   Task<ResponseDto> HandleAsync(MarkAsUndoneTodoTaskDto command);
}