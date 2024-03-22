using FluentResults;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Exceptions;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Domain.Handlers;

public class TodoTaskHandler : ITodoTaskHandler
{
    private readonly ITodoTaskRepository _repository;
    
    public TodoTaskHandler(ITodoTaskRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<ResponseTodoTaskDto> HandleAsync(CreateTodoTaskDto command, CancellationToken cancellationToken)
    {
        var todoTaskToCreate = await _repository.CreateAsync(new TodoTask(0, command.Name, command.DueDate, command.CategoryId), cancellationToken);

        if(todoTaskToCreate.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "TodoTask not created",
                Detail = "TodoTask not created",
                Status = StatusCodes.Status400BadRequest
            });
        }

        return todoTaskToCreate.Value;
    }

    public async Task<ResponseTodoTaskDto> HandleAsync(GetByIdTodoTaskDto command, CancellationToken cancellationToken)
    {
        var todoTaskResult = await _repository.GetAsync(command.Id, cancellationToken);

        if(todoTaskResult.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "TodoTask not found",
                Detail = "TodoTask not found",
                Status = StatusCodes.Status404NotFound
            });
        }
        
        return todoTaskResult.Value;
    }

    public async Task<IEnumerable<ResponseTodoTaskDto>> HandleAsync(GetAllTodoTaskDto command, CancellationToken cancellationToken)
    {
        var todoTasks = await _repository.GetAsync(cancellationToken);
            

        if(todoTasks.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "TodoTask not found",
                Detail = "TodoTask not found",
                Status = StatusCodes.Status404NotFound
            });
        }
        
        return todoTasks.Value;
   }

    public async Task<IEnumerable<ResponseTodoTaskDto>> HandleAsync(SearchTodoTaskDto command, CancellationToken cancellationToken)
    {
        var todoTasks = new Result<IEnumerable<ResponseTodoTaskDto>>();

        switch (command)
        {
            case { CategoryId: {} categoryId }:
                todoTasks = await _repository.GetAsync(x => x.CategoryId == categoryId, cancellationToken);
                break;
            case { IsComplete: {} isComplete }:
                todoTasks = await _repository.GetAsync(x => x.IsComplete == isComplete, cancellationToken);
                break;
            case { IsDueToday: true }:
                todoTasks = await _repository.GetAsync(x => (x.DueDate.Date - DateTime.Today).TotalDays == 0, cancellationToken);
                break;
            case { Name: {} name }:
                todoTasks = await _repository.GetAsync(x => x.Name.ToUpper().Contains(name.ToUpper()), cancellationToken);
                break;
            default:
                throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
                {
                    Title = "Search parameters not valid",
                    Detail = "Search parameters not valid",
                    Status = StatusCodes.Status404NotFound
                });
        }

        if (todoTasks.IsFailed) 
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "TodoTask not found",
                Detail = "TodoTask not found",
                Status = StatusCodes.Status404NotFound
            });
        }

        return todoTasks.Value;
    }

    public async Task<ResponseTodoTaskDto> HandleAsync(UpdateTodoTaskDto command, int todoTaskId, CancellationToken cancellationToken)
    {
        command.Id = todoTaskId;
        var todoTaskUpdated = await _repository.UpdateAsync(command, cancellationToken);

        if(todoTaskUpdated.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "TodoTask not updated",
                Detail = "TodoTask not updated",
                Status = StatusCodes.Status400BadRequest
            });
        }
        
        return todoTaskUpdated.Value;
    }

    public async Task<ResponseTodoTaskDto> HandleAsync(DeleteTodoTaskDto command, CancellationToken cancellationToken)
    {
        var todoTaskDeleted = await _repository.DeleteAsync(command, cancellationToken);

        if(todoTaskDeleted.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "TodoTask not deleted",
                Detail = "TodoTask not deleted",
                Status = StatusCodes.Status400BadRequest
            });
        }

        return todoTaskDeleted.Value;
    }

    public async Task<ResponseTodoTaskDto> HandleAsync(ToggleCompletionDto command, CancellationToken cancellationToken)
    {
        var todoTaskToToggleCompletion = new UpdateTodoTaskDto(command.Id, null, null, true);
        
        var completedTodoTask = await _repository.UpdateAsync(todoTaskToToggleCompletion, cancellationToken);

        if(completedTodoTask.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "TodoTask not updated",
                Detail = "TodoTask not updated",
                Status = StatusCodes.Status400BadRequest
            });
        }

        return completedTodoTask.Value;
        
    }
}