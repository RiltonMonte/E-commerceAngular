import { Component, OnInit } from '@angular/core';
import { book } from './model/book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Books: any;

  bookService : BookService

  constructor( bookService: BookService) {

    this.bookService = bookService;

   }

  ngOnInit(): void {

  this.Books = this.bookService.getBook().subscribe((data => {

    this.Books = data;
    
   }))

  }

}
