using Application.Interfaces;
using Domain.Entities;
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

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var book = await _repo.Get(id);
        if (book == null) return NotFound();
        return Ok(book);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var books = await _repo.GetAll();
        return Ok(books);
    }

    [HttpPost]
    public async Task<IActionResult> Add(Book book)
    {
        var created = await _repo.Add(book);
        return Ok(created);
    }

    [HttpPut]
    public async Task<IActionResult> Update(Book book)
    {
        var updated = await _repo.Update(book);
        if (updated == null) return NotFound();
        return Ok(updated);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _repo.Delete(id);
        if (!deleted) return NotFound();
        return Ok();
    }
}
