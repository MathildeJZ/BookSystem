import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

    @Injectable({
    providedIn: 'root'
    })
    export class BookService {

    private apiUrl = 'http://localhost:5000/api/books';

    constructor(private http: HttpClient) {}

    addBook(book: Book) {
        return this.http.post<Book>(this.apiUrl, book);
    }

    deleteBook(id: number) {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    updateBook(id: number, book: Book) {
        return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
    }

    getBook(id: number) {
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }
    }
