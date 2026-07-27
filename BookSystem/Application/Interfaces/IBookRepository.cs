using Api.Domain.Entities;

namespace Api.Application.Interfaces;

public interface IBookRepository
    {
    
    Book Add(Book book);
    Book Update(int id, Book book);
    void Delete(int id);
    Book Get(int id);   
}