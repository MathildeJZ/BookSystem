using Api.Application.Interfaces;
using Api.Domain.Entities;
using Microsoft.AspNetCore.Mvc;


namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly IBookRepository _repo;

    public BooksController(IBookRepository repo)
    {
        _repo = repo;
    }

    [HttpPost]

    public IActionResult Add(Book book)
    {
        return Ok(_repo.Add(book));
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _repo.Delete(id);
        return NoContent();
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Book book)
    {
        return Ok(_repo.Update(id, book));
    }
    
    [HttpGet("{id}")]
    public IActionResult GetBook(int id)
    {
        return Ok(_repo.Get(id));
    }
}