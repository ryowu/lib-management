import { Component, OnInit } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { PageEvent } from '@angular/material/paginator';
import {
	AllBooksQuery,
	AllBooksDocument,
	AllBooksQueryVariables,
	Book,
} from '../../../generated/graphql';
import { ApolloService } from '../../common/services/apollo-client-service';

@Component({
	selector: 'app-books-admin',
	templateUrl: './books-admin.component.html',
	styleUrls: ['./books-admin.component.scss'],
})
export class BooksAdminComponent implements OnInit {
	private client: ApolloClient<any>;

	public pageIndex = 0;
	public totalCount = 0;
	public pageSize = 10;
	public pageSizeOptions = [5, 10, 25, 100];

	public books: Book[] = [];

	constructor(private apolloService: ApolloService) {
		this.client = this.apolloService.getClient();
	}

	public ngOnInit(): void {
		this.reloadBooks();
	}

	public pageChanged(event: PageEvent) {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
		this.reloadBooks();
	}

	private reloadBooks(): void {
		this.client
			.query<AllBooksQuery, AllBooksQueryVariables>({
				query: AllBooksDocument,
				variables: {
					first: this.pageSize,
					offset: this.pageSize * this.pageIndex,
				},
			})
			.then((result) => {
				this.totalCount = result.data?.books?.totalCount
					? result.data?.books?.totalCount
					: 0;
				this.books = result.data?.books?.nodes as Book[];
			})
			.catch((error) => {
				console.error(error);
			});
	}
}
