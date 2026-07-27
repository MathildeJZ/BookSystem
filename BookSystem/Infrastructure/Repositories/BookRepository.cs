using Application.Interfaces;
using Domain.Entities;

namespace Infrastructure.Repositories;

public class BookRepository : IBookRepository
{
    private readonly List<Book> _books = new();

    public Task<Book?> Get(int id)
    {
        return Task.FromResult(_books.FirstOrDefault(b => b.Id == id));
    }

    public Task<IEnumerable<Book>> GetAll()
    {
        return Task.FromResult(_books.AsEnumerable());
    }

    public Task<Book> Add(Book book)
    {
        book.Id = _books.Count + 1;
        _books.Add(book);
        return Task.FromResult(book);
    }

    public Task<Book> Update(Book book)
    {
        var existing = _books.FirstOrDefault(b => b.Id == book.Id);
        if (existing == null)
            return Task.FromResult<Book>(null!);

        existing.Title = book.Title;
        existing.Author = book.Author;
        existing.Price = book.Price;
        existing.Year = book.Year;
        existing.Pages = book.Pages;
        existing.Publisher = book.Publisher;

        return Task.FromResult(existing);
    }

    public Task<bool> Delete(int id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book == null)
            return Task.FromResult(false);

        _books.Remove(book);
        return Task.FromResult(true);
    }
}


