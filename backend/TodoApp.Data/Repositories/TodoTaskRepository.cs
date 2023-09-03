using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Context;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Repositories;

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
        var todoTaskToCreate = todoTask;

        var createdTodoTask = await _context.TodoTasks.AddAsync(todoTaskToCreate);
        await _context.SaveChangesAsync();

        return createdTodoTask.Entity;
    }

    public async Task<TodoTask> DeleteAsync(DeleteTodoTaskDto todoTask)
    {
        var todoTaskToDelete = _context.TodoTasks.Find(todoTask.Id);

        if (todoTaskToDelete == null)
            throw new Exception("TodoTask to delete not found");

        _context.TodoTasks.Remove(todoTaskToDelete);
        await _context.SaveChangesAsync();

        return todoTaskToDelete;
    }

    public async Task<IEnumerable<TodoTask>> GetAllAsync()
    {
        return await _context.TodoTasks.ToListAsync();
    }

    public async Task<TodoTask> GetByIdAsync(int id)
    {
        var todoTaskToGet = await _context.TodoTasks.FindAsync(id);
        
        if (todoTaskToGet == null)
            throw new Exception("TodoTask to get not found");

        return todoTaskToGet;
    }

    public async Task<TodoTask> UpdateAsync(UpdateTodoTaskDto todoTask)
    {
        var todoTaskToUpdate = _context.TodoTasks.Find(todoTask.Id);

        if (todoTaskToUpdate == null)
            throw new Exception("TodoTask to update not found");

        todoTaskToUpdate.Name = todoTask.Name ?? todoTaskToUpdate.Name;
        todoTaskToUpdate.DueDate = todoTask.DueDate ?? todoTaskToUpdate.DueDate;
        todoTaskToUpdate.IsComplete = todoTask.IsComplete ?? todoTaskToUpdate.IsComplete;

        await _context.SaveChangesAsync();

        return todoTaskToUpdate;
    }
}