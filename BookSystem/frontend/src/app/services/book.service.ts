import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Book} from './book';

@Injectable({
    providedIn: 'root'
})
export class BookService {

        private apiUrl = 'http://localhost:5000/api/books';

        constructor(private http: HttpClient) {}

        addBook(book: any) {
            return this.http.post(this.apiUrl, book);
        }

        deleteBook(id: number) {
            return this.http.delete(`${this.apiUrl}/${id}`);
        }

        updateBook(id: number, book: any) {
            return this.http.put(`${this.apiUrl}/${id}`, book);
        }

        getBook(id: number) {
            return this.http.get(`${this.apiUrl}/${id}`);
        }
}