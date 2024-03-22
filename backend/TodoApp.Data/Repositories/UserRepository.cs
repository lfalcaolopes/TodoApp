using FluentResults;
using TodoApp.Domain.DTOs.User;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Data.Repositories;

public class UserRepository : IUserRepository
{
    public Task<Result<ResponseUserDto>> CreateAsync(User user, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<Result<ResponseUserDto>> DeleteAsync(DeleteUserDto todoTask, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<Result<IEnumerable<ResponseUserDto>>> GetAsync(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<Result<ResponseUserDto>> GetAsync(int id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<Result<ResponseUserDto>> UpdateAsync(UpdateUserDto todoTask, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
