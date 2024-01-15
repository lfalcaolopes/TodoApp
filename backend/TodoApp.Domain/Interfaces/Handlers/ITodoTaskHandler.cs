using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface ITodoTaskHandler
{
   Task<ResponseTodoTaskDto> HandleAsync(CreateTodoTaskDto command, CancellationToken cancellationToken);
   Task<ResponseTodoTaskDto> HandleAsync(GetByIdTodoTaskDto command, CancellationToken cancellationToken);
   Task<IEnumerable<ResponseTodoTaskDto>> HandleAsync(GetAllTodoTaskDto command, CancellationToken cancellationToken);
   Task<IEnumerable<ResponseTodoTaskDto>> HandleAsync(SearchTodoTaskDto command, CancellationToken cancellationToken);
   Task<ResponseTodoTaskDto> HandleAsync(UpdateTodoTaskDto command, int id, CancellationToken cancellationToken);
   Task<ResponseTodoTaskDto> HandleAsync(DeleteTodoTaskDto command, CancellationToken cancellationToken);
   Task<ResponseTodoTaskDto> HandleAsync(ToggleCompletionDto command, CancellationToken cancellationToken);
}