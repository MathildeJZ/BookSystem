using Application.Interfaces;
using Infrastructure.Repositories;
using Infrastructure.Data;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<IBookRepository, BookRepository>();

// Add Swagger (optional)
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
