    import { Component, EventEmitter, Output } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { Book } from '../../services/book';

    @Component({
    selector: 'app-add-book-modal',
    standalone: true,
    imports: [FormsModule],
    template: `
        <div class="overlay">
        <div class="modal">
            <h2>Tilføj Bog</h2>

            <label>Title:</label>
            <input type="text" [(ngModel)]="book.title">

            <label>Forfatter:</label>
            <input type="text" [(ngModel)]="book.author">

            <label>Pris:</label>
            <input type="number" [(ngModel)]="book.price">

            <label>År:</label>
            <input type="number" [(ngModel)]="book.year">

            <label>Sideantal:</label>
            <input type="number" [(ngModel)]="book.pages">

            <label>Forlag:</label>
            <input type="text" [(ngModel)]="book.publisher">

            <label>Noter:</label>
            <input type="text" [(ngModel)]="book.notes">

            <button (click)="save()">Gem</button>
            <button (click)="cancel()">Annuller</button>
            <button (click)="close()">Luk</button>
        </div>
        </div>
    `,
    styles: [`
        .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .modal {
        background: white;
        padding: 20px;
        border-radius: 5px;
        width: 400px;
        }
        input {
        width: 100%;
        margin-bottom: 10px;
        }
    `]
    })
    export class AddBookModalComponent {

    @Output() bookAdded = new EventEmitter<Book>();
    @Output() modalClosed = new EventEmitter<void>();

    book: Book = {
        title: '',
        author: '',
        price: 0,
        year: 0,
        pages: 0,
        publisher: '',
        notes: ''
    };

    save() {
        this.bookAdded.emit(this.book);
    }

    cancel() {
        this.close();
    }

    close() {
        this.modalClosed.emit();
    }
    }
