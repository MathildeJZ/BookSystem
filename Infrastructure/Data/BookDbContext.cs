using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Infrastructure.Data
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions<BookDbContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Book>(entity =>
    {
        entity.ToTable("books");

        entity.Property(b => b.Id).HasColumnName("id");
        entity.Property(b => b.Title).HasColumnName("title");
        entity.Property(b => b.Author).HasColumnName("author");
        entity.Property(b => b.Publisher).HasColumnName("publisher");
        entity.Property(b => b.Price).HasColumnName("price");
        entity.Property(b => b.Year).HasColumnName("year");
        entity.Property(b => b.Pages).HasColumnName("pages");
    });
}
    }
}

//opretterforbindelse ml api og Postgresql-db.
//Fortæller EF core at der er en tabel der hedder Books
//Controlleren kan hente,oprette, slette og opdaterer bøger i databasen.