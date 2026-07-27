using Api.Application.Interfaces;
using Api.Domain.Entities;

namespace Api.Infrastructure.Repositories;

public class BookRepository : IBookRepository
{
    private readonly List<Book> _books = new();

    public Book Add(Book book)
    {
        book.Id = _books.Count + 1;
        _books.Add(book);
        return book;
    }

    public Book Update(int id, Book book)
    {
        var existing = _books.FirstOrDefault(b => b.Id == id);
        if (existing == null) return null;

        existing.Title = book.Title;
        existing.Author = book.Author;
        existing.Price = book.Price;
        existing.Year = book.Year;
        existing.Pages = book.Pages;
        existing.Publisher = book.Publisher;

        return existing;
    }

    public void Delete(int id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book != null) _books.Remove(book);
    }

    public Book Get(int id)
    {
        return _books.FirstOrDefault(b => b.Id == id);
    }
}
