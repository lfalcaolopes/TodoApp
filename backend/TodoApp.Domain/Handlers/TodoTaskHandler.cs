using TodoApp.Domain.DTOs;
using TodoApp.Domain.DTOs.TodoTask;
using TodoApp.Domain.Entities;
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
    
    public async Task<ResponseDto> HandleAsync(CreateTodoTaskDto command)
    {
        try
        {
            var todoTaskToCreate = await _repository.CreateAsync(new TodoTask(0, command.Name, command.DueDate, command.CategoryId));

            return new ResponseDto(true, new []{todoTaskToCreate});
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }

    public async Task<ResponseDto> HandleAsync(GetByIdTodoTaskDto command)
    {
        try
        {
            var todoTask = await _repository.GetAsync(command.Id);
            
            return new ResponseDto(true, new []{todoTask});
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }

    public async Task<ResponseDto> HandleAsync(GetAllTodoTaskDto command)
    {
        try
        {
            var todoTasks = await _repository.GetAsync();
            
            return new ResponseDto(true, todoTasks);
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }

    public async Task<ResponseDto> HandleAsync(SearchTodoTaskDto command)
    {
        try
        {
            if (command.CategoryId != null)
            {
                var todoTasks = await _repository.GetAsync(x => x.CategoryId == command.CategoryId);

                return new ResponseDto(true, todoTasks);
            }

            if (command.IsComplete != null)
            {
                var todoTasks = await _repository.GetAsync(x => x.IsComplete == command.IsComplete);

                return new ResponseDto(true, todoTasks);
            }

            if (command.IsDueToday == true)
            {
                var todoTasks = await _repository.GetAsync(x => (x.DueDate.Date - DateTime.Today).TotalDays == 0);

                return new ResponseDto(true, todoTasks);
            }

            if (command.Name != null)
            {
                var todoTasks = await _repository.GetAsync(x => x.Name.ToUpper().Contains(command.Name.ToUpper()));

                return new ResponseDto(true, todoTasks);
            }
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
        
        return new ResponseDto(false, new []{ "Search parameters not valid"});
    }

    public async Task<ResponseDto> HandleAsync(UpdateTodoTaskDto command, int todoTaskId)
    {
        try
        {
            command.Id = todoTaskId;
            var todoTaskUpdated = await _repository.UpdateAsync(command);
            
            return new ResponseDto(true, new []{todoTaskUpdated});
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }

    public async Task<ResponseDto> HandleAsync(DeleteTodoTaskDto command)
    {
        try
        {
            var todoTaskDeleted = await _repository.DeleteAsync(command);
            
            return new ResponseDto(true, new []{todoTaskDeleted});
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }

    public async Task<ResponseDto> HandleAsync(MarkAsDoneTodoTaskDto command)
    {
        try
        {
            var todoTaskToMarkAsDone = new UpdateTodoTaskDto(command.Id, null, null, command.IsComplete);
            
            var completedTodoTask = await _repository.UpdateAsync(todoTaskToMarkAsDone);
            
            return new ResponseDto(true, new []{completedTodoTask});
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }

    public async Task<ResponseDto> HandleAsync(MarkAsUndoneTodoTaskDto command)
    {
        try
        {
            var todoTaskToMarkAsUndone = new UpdateTodoTaskDto(command.Id, null, null, command.IsComplete);
            
            var uncompletedTodoTask = await _repository.UpdateAsync(todoTaskToMarkAsUndone);
            
            return new ResponseDto(true, new []{uncompletedTodoTask});
        }
        catch (Exception ex)
        {
            return new ResponseDto(false, new []{ex.Message});
        }
    }
}