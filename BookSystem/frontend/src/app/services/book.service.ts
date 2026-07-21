import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BookService {

        private apiUrl = 'http://localhost:4200/api/books';

        constructoer(private http: HttpClient) {}

        addBook(book: any) {
            return this.http.post(`${this.apiUrl}/add`, book);
        }

        deleteBook(id: number) {
}