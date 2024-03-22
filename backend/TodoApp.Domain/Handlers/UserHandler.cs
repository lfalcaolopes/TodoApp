using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApp.Domain.DTOs.User;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Exceptions;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Domain.Handlers;

public class UserHandler : IUserHandler
{
    private readonly IUserRepository _repository;

    public UserHandler(IUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<ResponseUserDto> HandleAsync(CreateUserDto command, CancellationToken cancellationToken)
    {
        var userToCreate = await _repository.CreateAsync(new User(0, command.Name, command.Email, command.Password), cancellationToken);

        if(userToCreate.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "User not created",
                Detail = "User not created",
                Status = StatusCodes.Status400BadRequest
            });
        }

        return userToCreate.Value;
    }

    public async Task<ResponseUserDto> HandleAsync(GetByIdUserDto command, CancellationToken cancellationToken)
    {
        var userResult = await _repository.GetAsync(command.Id, cancellationToken);

        if(userResult.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "User not found",
                Detail = "User not found",
                Status = StatusCodes.Status404NotFound
            });
        }

        return userResult.Value;
    }

    public async Task<IEnumerable<ResponseUserDto>> HandleAsync(GetAllUserDto command, CancellationToken cancellationToken)
    {
        var users = await _repository.GetAsync(cancellationToken);

        if(users.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status404NotFound, new ProblemDetails
            {
                Title = "Users not found",
                Detail = "Users not found",
                Status = StatusCodes.Status404NotFound
            });
        }

        return users.Value;
    }

    public async Task<ResponseUserDto> HandleAsync(UpdateUserDto command, int id, CancellationToken cancellationToken)
    {
        command.Id = id;
        var userToUpdate = await _repository.UpdateAsync(command, cancellationToken);

        if(userToUpdate.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "User not updated",
                Detail = "User not updated",
                Status = StatusCodes.Status400BadRequest
            });
        }

        return userToUpdate.Value;
    }

    public async Task<ResponseUserDto> HandleAsync(DeleteUserDto command, CancellationToken cancellationToken)
    {
        var userToDelete = await _repository.DeleteAsync(command, cancellationToken);

        if(userToDelete.IsFailed)
        {
            throw new ErrorResponseException(StatusCodes.Status400BadRequest, new ProblemDetails
            {
                Title = "User not deleted",
                Detail = "User not deleted",
                Status = StatusCodes.Status400BadRequest
            });
        }

        return userToDelete.Value;
    }
}