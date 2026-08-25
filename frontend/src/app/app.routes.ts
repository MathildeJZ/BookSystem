    import { Routes } from '@angular/router';
    import { HomeComponent } from './pages/home/home.component';
    import { AddBookComponent } from './pages/add-book/add-book.component';
    import { BookListComponent } from './pages/book-list/book-list.component';

 

    export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: 'books', component: BookListComponent}
    ];
