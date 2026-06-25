import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  soldPlace: string= '';
  delivery: string= '';
  soldWithOthers: boolean = false;

  amount = 1;
  otherBooks: string[] = [];

  searchValue: string ='';
  searchResults: string[] = [];

  allBooks: string[] =[
    "Den Guddommelige Komedie",
    "Moby Dick",
    "Det evige smil"
  ];

  onSearch(){
    const query = this.searchValue.toLowerCase();

    this.searchResults = this.allBooks.filter(book => book.toLowerCase().includes(query));
  }

  updateOtherBooks() {
    this.otherBooks = Array(this.amount).fill('');
  }
}



