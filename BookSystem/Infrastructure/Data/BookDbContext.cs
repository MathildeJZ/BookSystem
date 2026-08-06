using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Infrastructure.Data
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().ToTable("books");

            modelBuilder.Entity<Book>().Property(b => b.Id).HasColumnName("id");
            modelBuilder.Entity<Book>().Property(b => b.Title).HasColumnName("title");
            modelBuilder.Entity<Book>().Property(b => b.Author).HasColumnName("author");
            modelBuilder.Entity<Book>().Property(b => b.Publisher).HasColumnName("publisher");
            modelBuilder.Entity<Book>().Property(b => b.Price).HasColumnName("price");
            modelBuilder.Entity<Book>().Property(b => b.Year).HasColumnName("year");
            modelBuilder.Entity<Book>().Property(b => b.Notes).HasColumnName("notes");
            modelBuilder.Entity<Book>().Property(b => b.Pages).HasColumnName("pages");


        }
    }
}


//opretterforbindelse ml api og Postgresql-db.
//Fortæller EF core at der er en tabel der hedder Books
//Controlleren kan hente,oprette, slette og opdaterer bøger i databasen.