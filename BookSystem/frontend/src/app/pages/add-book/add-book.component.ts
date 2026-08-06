    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';
    import { BookService } from '../../services/book.service';
    import { Book } from '../../services/book';
    import { AddBookModalComponent } from './add-book-modal.component';

    @Component({
    selector: 'app-add-book',
    standalone: true,
    imports: [CommonModule, FormsModule, AddBookModalComponent],
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css']
    })
    export class AddBookComponent {

    showModal = false;

    book: Book = {
        title: '',
        author: '',
        price: 0,
        year: 0,
        pages: 0,
        publisher: '',
        notes: ''
    };

    constructor(private bookService: BookService) {}

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }

    saveBook(book: Book) {
        this.bookService.add(book).subscribe({
        next: () => {
            alert('Bog tilføjet!');
            this.showModal = false;
        },
        error: (err) => console.error(err)
        });
    }

    goBack() {
        history.back();
    }

    cancel() {
        this.book = {
        title: '',
        author: '',
        price: 0,
        year: 0,
        pages: 0,
        publisher: '',
        notes: ''
        };
    }
    }
