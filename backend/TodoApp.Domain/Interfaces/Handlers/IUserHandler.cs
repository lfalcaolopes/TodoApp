
using TodoApp.Domain.DTOs.User;

namespace TodoApp.Domain.Interfaces.Handlers;

public interface IUserHandler
{
   Task<ResponseUserDto> HandleAsync(CreateUserDto command, CancellationToken cancellationToken);
   Task<ResponseUserDto> HandleAsync(GetByIdUserDto command, CancellationToken cancellationToken);
   Task<IEnumerable<ResponseUserDto>> HandleAsync(GetAllUserDto command, CancellationToken cancellationToken);
   Task<ResponseUserDto> HandleAsync(UpdateUserDto command, int id, CancellationToken cancellationToken);
   Task<ResponseUserDto> HandleAsync(DeleteUserDto command, CancellationToken cancellationToken);
}