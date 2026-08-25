import { Component, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import {BookService} from '../../services/book.service';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {
    books: any[] = [];

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.bookService.getAllBooks().subscribe(data =>{
            this.books = data;
        });
    }
}