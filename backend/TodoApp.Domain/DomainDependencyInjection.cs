using Microsoft.Extensions.DependencyInjection;
using TodoApp.Domain.Handlers;
using TodoApp.Domain.Interfaces.Handlers;

namespace TodoApp.Domain;

public static class DomainDependencyInjection
{
    public static IServiceCollection AddDomainServices(this IServiceCollection services)
    {
        services.AddScoped<ITodoTaskHandler, TodoTaskHandler>();
        services.AddScoped<ICategoryHandler, CategoryHandler>();
        services.AddScoped<IUserHandler, UserHandler>();

        return services;
    }
}
