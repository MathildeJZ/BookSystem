    import { Component } from '@angular/core';
    import { BookService } from '../../services/book.service';
    import { Book } from '../../services/book';

    @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
    })
    export class HomeComponent {

    // --- Søgning ---
    searchQuery: string = "";
    books: Book[] = [];

    // --- CRUD felter ---
    id: number = 0;
    title: string = '';
    author: string = '';
    publisher: string = '';
    price: number = 0;
    year: number = 0;
    pages: number = 0;

    book: Book | null = null;

    constructor(private bookService: BookService) {}

    // --- Søgning i DB ---
    searchBooks() {
        this.bookService.search(this.searchQuery).subscribe(result => {
        this.books = result;
        });
    }

    // --- CRUD ---
    addBook() {
        const newBook: Book = {
        id: 0,
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        price: this.price,
        year: this.year,
        pages: this.pages
        };

        this.bookService.add(newBook).subscribe(result => {
        console.log(result);
        this.book = result;
        });
    }

    deleteBook() {
        this.bookService.delete(this.id).subscribe(() => {
        console.log('Deleted');
        });
    }

    updateBook() {
        const updatedBook: Book = {
        id: this.id,
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        price: this.price,
        year: this.year,
        pages: this.pages
        };

        this.bookService.update(updatedBook).subscribe(result => {
        console.log(result);
        this.book = result;
        });
    }

    getBook() {
        this.bookService.get(this.id).subscribe(result => {
        console.log(result);
        this.book = result;
        });
    }
    }

    

