import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { book } from "./model/book";


@Injectable()

export class BookService{
    private url = '';

    HttpOptions={
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }

}