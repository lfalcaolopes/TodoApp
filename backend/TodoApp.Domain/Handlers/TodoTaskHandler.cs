using TodoApp.Domain.Commands.Category;
using TodoApp.Domain.Commands.TodoTask;
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
    
    public async Task<CommandResult> HandleAsync(CreateTodoTaskDTO command)
    {
        try
        {
            var todoTaskToCreate = await _repository.CreateAsync(new TodoTask(command.Name, command.DueDate, new Category("createTest", "#tteess", new List<TodoTask>())));
            
            return new CommandResult(true, "TodoTask created successfully", todoTaskToCreate);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(GetByIdTodoTaskDTO command)
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

    public async Task<CommandResult> HandleAsync(GetAllCategoriesDTO command)
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

    public async Task<CommandResult> HandleAsync(UpdateTodoTaskDTO command)
    {
        try
        {
            var todoTaskToUpdate = await _repository.GetByIdAsync(command.Id);

            todoTaskToUpdate.Name = command.Name ?? todoTaskToUpdate.Name;
            todoTaskToUpdate.DueDate = command.DueDate ?? todoTaskToUpdate.DueDate;

            var todoTaskUpdated = await _repository.UpdateAsync(todoTaskToUpdate);
            
            return new CommandResult(true, "TodoTask updated successfully", todoTaskUpdated);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }

    public async Task<CommandResult> HandleAsync(DeleteTodoTaskDTO command)
    {
        try
        {
            var todoTaskToDelete = await _repository.GetByIdAsync(command.Id);
            
            var todoTaskDeleted = await _repository.DeleteAsync(todoTaskToDelete);
            
            return new CommandResult(true, "TodoTask deleted successfully", todoTaskDeleted);
        }
        catch (Exception ex)
        {
            return new CommandResult(false, ex.Message, null);
        }
    }
}