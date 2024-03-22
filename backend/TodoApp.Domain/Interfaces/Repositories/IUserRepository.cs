using System.Linq.Expressions;
using FluentResults;
using TodoApp.Domain.DTOs.User;
using TodoApp.Domain.Entities;

namespace TodoApp.Domain.Interfaces.Repositories;

public interface IUserRepository
{
    
    Task<Result<IEnumerable<ResponseUserDto>>> GetAsync(CancellationToken cancellationToken);
    Task<Result<ResponseUserDto>> GetAsync(int id, CancellationToken cancellationToken);
    Task<Result<ResponseUserDto>> CreateAsync(User user, CancellationToken cancellationToken);
    Task<Result<ResponseUserDto>> UpdateAsync(UpdateUserDto todoTask, CancellationToken cancellationToken);
    Task<Result<ResponseUserDto>> DeleteAsync(DeleteUserDto todoTask, CancellationToken cancellationToken);
}
