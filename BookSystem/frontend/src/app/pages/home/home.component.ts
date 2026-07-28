    import { Component } from '@angular/core';
    import { BookService } from '../../services/book.service';
    import { Book } from '../../services/book';

    @Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
    })
    export class HomeComponent {

    id: number = 0;

    title: string = '';
    author: string = '';
    publisher: string = '';
    price: number = 0;
    year: number = 0;
    pages: number = 0;

    book: Book | null = null;

    constructor(private bookService: BookService) {}

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

        this.bookService.addBook(newBook)
        .subscribe(result => {
            console.log(result);
            this.book = result;
        });
    }

    deleteBook() {
        this.bookService.deleteBook(this.id)
        .subscribe(() => console.log('Deleted'));
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

        this.bookService.updateBook(this.id, updatedBook)
        .subscribe(result => {
            console.log(result);
            this.book = result;
        });
    }

    getBook() {
        this.bookService.getBook(this.id)
        .subscribe(result => {
            console.log(result);
            this.book = result;
        });
    }
    }

    
    

