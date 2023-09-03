using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Results;
using TodoApp.Domain.Repositories;

namespace TodoApp.Domain.Handlers;

public class TodoTaskHandler : ITodoTaskHandler
{
    private readonly ITodoTaskRepository _repository;
    
    public TodoTaskHandler(ITodoTaskRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<CommandResult> HandleAsync(CreateTodoTaskDto command)
    {
        try
        {
            var todoTaskToCreate = await _repository.CreateAsync(new TodoTask(0, command.Name, command.DueDate, command.CategoryId));
            
            
            
            return new CommandResult(true, "TodoTask created successfully", todoTaskToCreate);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(GetByIdTodoTaskDto command)
    {
        try
        {
            var todoTask = await _repository.GetByIdAsync(command.Id);
            
            return new CommandResult(true, "TodoTask retrieved successfully", todoTask);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(GetAllTodoTaskDto command)
    {
        try
        {
            var todoTasks = await _repository.GetAllAsync();
            
            return new CommandResult(true, "TodoTasks retrieved successfully", todoTasks);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(UpdateTodoTaskDto command, int todoTaskId)
    {
        try
        {
            command.Id = todoTaskId;
            var todoTaskUpdated = await _repository.UpdateAsync(command);
            
            return new CommandResult(true, "TodoTask updated successfully", todoTaskUpdated);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(DeleteTodoTaskDto command)
    {
        try
        {
            var todoTaskDeleted = await _repository.DeleteAsync(command);
            
            return new CommandResult(true, "TodoTask deleted successfully", todoTaskDeleted);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }
}