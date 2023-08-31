using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Context;
using TodoApp.Data.Repositories;
using TodoApp.Domain.Entities;

class Program
{
    static void Main(string[] args)
    {
        System.Console.WriteLine('a');
        var optionsBuilder = new DbContextOptionsBuilder<TodoDataContext>();
        optionsBuilder.UseNpgsql("Host=localhost;Database=TodoAppApi;Username=postgres;Password=1q2w3e4r5t6y");

        using (var context = new TodoDataContext(optionsBuilder.Options))
        {
            PrintCategory(context);
            
            Thread.Sleep(5000);
        }
    }

    static async void PrintCategory(TodoDataContext context)
    {
        System.Console.WriteLine('b');
       // var todo = new TodoTask("testing", false, new DateTime())

        // category.Id = 2;

            // var categoryRepo = new CategoryRepository(context);

            // var createdCategory = await categoryRepo.DeleteAsync(category);

            // System.Console.WriteLine(createdCategory);
            // Console.WriteLine(string.Join(", ", createdCategory.));
            // foreach (var car in createdCategory)
            // {
            //     Console.WriteLine(car.Name);
            // }
    }
}