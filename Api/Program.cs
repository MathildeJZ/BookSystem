    using Application.Interfaces;
    using Infrastructure.Repositories;
    using Microsoft.EntityFrameworkCore;
    using Infrastructure.Data;
    using Microsoft.OpenApi.Models;

    var builder = WebApplication.CreateBuilder(args);

    //Bind til Azure Container Apps port
    var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
    builder.WebHost.UseUrls($"http://0.0.0.0:{port}");

    // Controllers
    builder.Services.AddControllers();

    // Repository
    builder.Services.AddScoped<IBookRepository, BookRepository>();

    // Swagger
    builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Book API", Version = "v1" });
    });

    // Database
    builder.Services.AddDbContext<BookDbContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

    // CORS
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAngular", policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
    });

    var app = builder.Build();

    // Developer exception page
    app.UseDeveloperExceptionPage();

    // CORS
    app.UseCors("AllowAngular");

    // HTTPS
    //app.UseHttpsRedirection();

    // Authorization
    app.UseAuthorization();

    // Swagger
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Book API v1");
    });

    app.MapControllers();

    app.Run();
