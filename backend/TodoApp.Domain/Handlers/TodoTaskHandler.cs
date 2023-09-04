using System.Linq.Expressions;
using Microsoft.VisualBasic;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Results;
using TodoApp.Domain.Interfaces.Repositories;

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
            var todoTask = await _repository.GetAsync(command.Id);
            
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
            var todoTasks = await _repository.GetAsync();
            
            return new CommandResult(true, "TodoTasks retrieved successfully", todoTasks);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(SearchTodoTaskDto command)
    {
        try
        {
            if (command.CategoryId != null)
            {
                var todoTasks = await _repository.GetAsync(x => x.CategoryId == command.CategoryId);

                return new CommandResult(true, "TodoTasks by category retrieved successfully", todoTasks);
            }

            if (command.IsComplete != null)
            {
                var todoTasks = await _repository.GetAsync(x => x.IsComplete == command.IsComplete);

                return new CommandResult(true, "TodoTasks by completion retrieved successfully", todoTasks);
            }

            if (command.IsDueToday == true)
            {
                var todoTasks = await _repository.GetAsync(x => (x.DueDate.Date - DateTime.Today).TotalDays == 0);

                return new CommandResult(true, "TodoTasks by due date retrieved successfully", todoTasks);
            }
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
        
        return new CommandResult(false, "Invalid search parameter", null);
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

    public async Task<CommandResult> HandleAsync(MarkAsDoneTodoTaskDto command)
    {
        try
        {
            var todoTaskToMarkAsDone = new UpdateTodoTaskDto(command.Id, null, null, command.IsComplete);
            
            var completedTodoTask = await _repository.UpdateAsync(todoTaskToMarkAsDone);
            
            return new CommandResult(true, "TodoTask marked as done successfully", completedTodoTask);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(MarkAsUndoneTodoTaskDto command)
    {
        try
        {
            var todoTaskToMarkAsUndone = new UpdateTodoTaskDto(command.Id, null, null, command.IsComplete);
            
            var uncompletedTodoTask = await _repository.UpdateAsync(todoTaskToMarkAsUndone);
            
            return new CommandResult(true, "TodoTask marked as undone successfully", uncompletedTodoTask);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }
}