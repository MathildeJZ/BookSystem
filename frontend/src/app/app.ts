
import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BookService } from './services/book.service';
import { Book } from './services/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Forbindelse til BookService
  private bookService = inject(BookService);

  // Liste med bøger
  books: Book[] = [];

  // Platform og tema
  private platformId = inject(PLATFORM_ID);
  theme = signal('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.theme.set(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  // Henter bøger fra API'et, når komponenten starter
  ngOnInit() {
    this.bookService.getAll().subscribe({
      next: (data) => {
        this.books = data;
        console.log('Bøger hentet:', data);
      },
      error: (error) => {
        console.error('Fejl ved hentning af bøger:', error);
      }
    });
  }

  // Skifter mellem light og dark theme
  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  }
}


