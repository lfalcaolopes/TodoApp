using System.Linq.Expressions;
using FluentResults;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Context;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Data.Repositories;

public class TodoTaskRepository : ITodoTaskRepository
{
    private readonly TodoDataContext _context;

    public TodoTaskRepository(TodoDataContext context)
    {
        _context = context;
    }


    public async Task<Result<ResponseTodoTaskDto>> CreateAsync(TodoTask todoTask, CancellationToken cancellationToken)
    {
        var createdTodoTask = await _context.TodoTasks.AddAsync(todoTask, cancellationToken);

        if (createdTodoTask.Entity == null)
            return Result.Fail("TodoTask not created");
        
        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok(new ResponseTodoTaskDto(createdTodoTask.Entity.Id, createdTodoTask.Entity.Name, createdTodoTask.Entity.DueDate, createdTodoTask.Entity.IsComplete, createdTodoTask.Entity.CategoryId));
    }

    public async Task<Result<ResponseTodoTaskDto>> UpdateAsync(UpdateTodoTaskDto todoTask, CancellationToken cancellationToken)
    {
        var todoTaskToUpdate = await _context.TodoTasks.FindAsync(new object?[] { todoTask.Id }, cancellationToken);

        if (todoTaskToUpdate == null)
            return Result.Fail("TodoTask to update not found");

        todoTaskToUpdate.Name = todoTask.Name ?? todoTaskToUpdate.Name;
        todoTaskToUpdate.DueDate = todoTask.DueDate ?? todoTaskToUpdate.DueDate;
        
        if (todoTask.ToggleIsComplete == true)
            todoTaskToUpdate.IsComplete = !todoTaskToUpdate.IsComplete;

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok(new ResponseTodoTaskDto(todoTaskToUpdate.Id, todoTaskToUpdate.Name, todoTaskToUpdate.DueDate, todoTaskToUpdate.IsComplete, todoTaskToUpdate.CategoryId));
    }
    
    public async Task<Result<ResponseTodoTaskDto>> DeleteAsync(DeleteTodoTaskDto todoTask, CancellationToken cancellationToken)
    {
        var todoTaskToDelete = await _context.TodoTasks.FindAsync(new object?[] { todoTask.Id }, cancellationToken);

        if (todoTaskToDelete == null)
            return Result.Fail("TodoTask to delete not found");

        _context.TodoTasks.Remove(todoTaskToDelete);
        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok(new ResponseTodoTaskDto(todoTaskToDelete.Id, todoTaskToDelete.Name, todoTaskToDelete.DueDate, todoTaskToDelete.IsComplete, todoTaskToDelete.CategoryId));
    }

    public async Task<Result<IEnumerable<ResponseTodoTaskDto>>> GetAsync(CancellationToken cancellationToken)
    {
        var todoTaskToGet = await _context.TodoTasks.ToListAsync(cancellationToken);

        if (todoTaskToGet.Count == 0)
            return Result.Fail<IEnumerable<ResponseTodoTaskDto>>("TodoTask to get not found");

        return Result.Ok(todoTaskToGet.Select(todoTask => new ResponseTodoTaskDto(todoTask.Id, todoTask.Name, todoTask.DueDate, todoTask.IsComplete, todoTask.CategoryId)));
    }

    public async Task<Result<ResponseTodoTaskDto>> GetAsync(int id, CancellationToken cancellationToken)
    {
        var todoTaskToGet = await _context.TodoTasks.FindAsync(new object?[] { id }, cancellationToken);
        
        if (todoTaskToGet == null)
            return Result.Fail("TodoTask to get not found");

        return Result.Ok(new ResponseTodoTaskDto(todoTaskToGet.Id, todoTaskToGet.Name, todoTaskToGet.DueDate, todoTaskToGet.IsComplete, todoTaskToGet.CategoryId));
    }
    
    public async Task<Result<IEnumerable<ResponseTodoTaskDto>>> GetAsync(Expression<Func<TodoTask, bool>> lambda, CancellationToken cancellationToken)
    {
        var todoTaskToGet = await _context.TodoTasks.Where(lambda).ToListAsync(cancellationToken);
        
        if (todoTaskToGet.Count == 0)
            return Result.Fail<IEnumerable<ResponseTodoTaskDto>>("TodoTask to get not found");

        return Result.Ok(todoTaskToGet.Select(todoTask => new ResponseTodoTaskDto(todoTask.Id, todoTask.Name, todoTask.DueDate, todoTask.IsComplete, todoTask.CategoryId)));
    }

}