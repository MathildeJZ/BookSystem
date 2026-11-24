
    import { Component, OnInit, inject } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';

    import { BookService } from '../../services/book.service';
    import { Book } from '../../services/book';

    @Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {

    private bookService = inject(BookService);

    soldPlace: string = '';
    delivery: string = '';
    soldWithOthers: boolean = false;

    amount: number = 1;
    otherBooks: string[] = [];

    searchValue: string = '';
    books: Book[] = [];

    ngOnInit() {
        this.bookService.getAll().subscribe({
            next: (data) => {
            console.log('DATA FRA API:', data);
            console.log('ANTAL FRA API:', data.length);

            this.books = data;

            console.log('ANTAL I BOOKS:', this.books.length);
            },

            error: (error) => {
            console.error('Fejl ved hentning af bøger:', error);
            }
        });
        }

    updateOtherBooks() {
        this.otherBooks = Array(this.amount).fill('');
    }
    }
