using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Context;
using TodoApp.Domain.DTOs;

var builder = WebApplication.CreateBuilder(args);

IConfiguration Configuration = new ConfigurationBuilder()
         .SetBasePath(Directory.GetCurrentDirectory())
         .AddJsonFile("appsettings.json")
         .Build();

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


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
