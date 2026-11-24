
using Application.Interfaces;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// CORS: Tillad Angular på localhost:4200
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Dependency Injection
builder.Services.AddScoped<IBookRepository, BookRepository>();

// Databaseforbindelse
builder.Services.AddDbContext<BookDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// Swagger
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Middleware
app.UseCors("AllowAngular");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

