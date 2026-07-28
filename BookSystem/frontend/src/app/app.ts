import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private platformId = inject(PLATFORM_ID);

  theme = signal('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.theme.set(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

    toggleTheme() {
      const newTheme = this.theme() === 'light' ? 'dark' : 'light';
      this.theme.set(newTheme);

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
  }

  // --- Dine eksisterende variabler ---
  soldPlace: string = '';
  delivery: string = '';
  soldWithOthers: boolean = false;

  amount = 1;
  otherBooks: string[] = [];

  searchValue: string = '';
  searchResults: string[] = [];

  allBooks: string[] = [
    "Den Guddommelige Komedie",
    "Moby Dick",
    "Det evige smil"
  ];

  onSearch() {
    const query = this.searchValue.toLowerCase();
    this.searchResults = this.allBooks.filter(book =>
      book.toLowerCase().includes(query)
    );
  }

  updateOtherBooks() {
    this.otherBooks = Array(this.amount).fill('');
  }
}




