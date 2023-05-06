import { Component, OnInit } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  AllBooksQuery,
  AllBooksDocument,
  AllBooksQueryVariables,
  Book,
} from '../../../generated/graphql';

@Component({
  selector: 'app-books-admin',
  templateUrl: './books-admin.component.html',
  styleUrls: ['./books-admin.component.scss'],
})
export class BooksAdminComponent implements OnInit {
  // Create an instance of ApolloClient
  private client = new ApolloClient({
    uri: 'https://lib-mgr-db.vercel.app/graphql',
    cache: new InMemoryCache(),
  });
  public books: Book[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.client
      .query<AllBooksQuery, AllBooksQueryVariables>({
        query: AllBooksDocument,
      })
      .then((result) => {
        this.books = result.data?.allBooks?.nodes as Book[];
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
