using System.Linq.Expressions;
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


    public async Task<TodoTask> CreateAsync(TodoTask todoTask)
    {
        var createdTodoTask = await _context.TodoTasks.AddAsync(todoTask);
        await _context.SaveChangesAsync();

        return createdTodoTask.Entity;
    }

    public async Task<TodoTask> UpdateAsync(UpdateTodoTaskDto todoTask)
    {
        var todoTaskToUpdate = await _context.TodoTasks.FindAsync(todoTask.Id);

        if (todoTaskToUpdate == null)
            throw new Exception("TodoTask to update not found");

        todoTaskToUpdate.Name = todoTask.Name ?? todoTaskToUpdate.Name;
        todoTaskToUpdate.DueDate = todoTask.DueDate ?? todoTaskToUpdate.DueDate;
        todoTaskToUpdate.IsComplete = todoTask.IsComplete ?? todoTaskToUpdate.IsComplete;

        await _context.SaveChangesAsync();

        return todoTaskToUpdate;
    }
    
    public async Task<TodoTask> DeleteAsync(DeleteTodoTaskDto todoTask)
    {
        var todoTaskToDelete = await _context.TodoTasks.FindAsync(todoTask.Id);

        if (todoTaskToDelete == null)
            throw new Exception("TodoTask to delete not found");

        _context.TodoTasks.Remove(todoTaskToDelete);
        await _context.SaveChangesAsync();

        return todoTaskToDelete;
    }

    public async Task<IEnumerable<TodoTask>> GetAsync()
    {
        return await _context.TodoTasks.ToListAsync();
    }

    public async Task<TodoTask> GetAsync(int id)
    {
        var todoTaskToGet = await _context.TodoTasks.FindAsync(id);
        
        if (todoTaskToGet == null)
            throw new Exception("TodoTask to get not found");

        return todoTaskToGet;
    }
    
    public async Task<IEnumerable<TodoTask>> GetAsync(Expression<Func<TodoTask, bool>> lambda)
    {
        var todoTaskToGet = await _context.TodoTasks.Where(lambda).ToListAsync();
        
        if (todoTaskToGet.Count == 0)
            throw new Exception("TodoTask to get dynamically not found");

        return todoTaskToGet;
    }

}