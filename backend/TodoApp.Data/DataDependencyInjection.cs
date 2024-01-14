using Microsoft.Extensions.DependencyInjection;
using TodoApp.Data.Repositories;
using TodoApp.Domain.Handlers;
using TodoApp.Domain.Interfaces.Handlers;
using TodoApp.Domain.Interfaces.Repositories;

namespace TodoApp.Data;

public static class DataDependencyInjection
{
    public static IServiceCollection AddDataServices(this IServiceCollection services)
    {
        services.AddScoped<ITodoTaskRepository, TodoTaskRepository>();
        services.AddScoped<ICategoryHandler, CategoryHandler>();

        return services;
    }
}
