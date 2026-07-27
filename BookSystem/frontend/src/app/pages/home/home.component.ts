    import { Component } from '@angular/core';
    import { BookService } from '../services/book.service';
    import { Book } from '../services/book';

    @Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
    })
    export class HomeComponent {

    title: string = '';
    info: string = '';
    id: number = 0;
    book: Book | null = null;

    constructor(private bookService: BookService) {}

    addBook() {
        this.bookService.addBook({ title: this.title, info: this.info })
        .subscribe((result: Book) => console.log(result));
    }

    deleteBook() {
        this.bookService.deleteBook(this.id)
        .subscribe(() => console.log('Delete'));
    }

    updateBook() {
        this.bookService.updateBook(this.id, { title: this.title, info: this.info })
        .subscribe((result: Book) => console.log(result));
    }

    getBook() {
        this.bookService.getBook(this.id)
        .subscribe((result: Book) => console.log(result));
    }
    }
