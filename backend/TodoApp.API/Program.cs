using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.API.Middlewares;
using TodoApp.Data.Context;
using TodoApp.Domain.DTOs;
using TodoApp.Domain;
using TodoApp.Data;

var allowSpecificOrigins = "_allowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

IConfiguration Configuration = new ConfigurationBuilder()
         .SetBasePath(Directory.GetCurrentDirectory())
         .AddJsonFile("appsettings.json")
         .Build();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("https://todo-app-zeta-lake.vercel.app/")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Setup database connection
builder.Services.AddDbContext<TodoDataContext>(options =>
    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddMvcCore().ConfigureApiBehaviorOptions(options => {
            options.InvalidModelStateResponseFactory = (errorContext) =>
            {
                var errors = errorContext.ModelState.Values.SelectMany(e => e.Errors.Select(m => m.ErrorMessage)).ToList();

                var result = new ResponseDto(false, errors);
                return new BadRequestObjectResult(result);
            };
        });


builder.Services.AddTransient<ErrorResponseMiddleware>();
builder.Services
    .AddDomainServices()
    .AddDataServices();

var app = builder.Build();

// Resolve the service scope factory
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        // Get the instance of your DB context
        var context = services.GetRequiredService<TodoDataContext>();

        // Apply the migrations
        context.Database.Migrate();
    }
    catch (Exception ex)
    {
        // Log the error if something goes wrong
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while migrating the database.");
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(allowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseMiddleware<ErrorResponseMiddleware>();

app.MapControllers();

app.Run();
