import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApolloClient } from '@apollo/client';
import { ApolloService } from 'src/app/common/services/apollo-client-service';
import { SpinnerService } from 'src/app/common/services/spinner-service';
import { GetBookByIdDocument, GetBookByIdQuery } from 'src/generated/graphql';

@Component({
	selector: 'app-books-detail',
	templateUrl: './books-detail.component.html',
	styleUrls: ['./books-detail.component.scss'],
})
export class BooksDetailComponent {
	private client: ApolloClient<any>;
	public bookForm: FormGroup = this.formBuilder.group({
		id: [null],
		name: [''],
		author: [''],
		publishDate: [''],
		status: [''],
		description: [''],
	});
	public bookId: number = 0;

	constructor(
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private apolloService: ApolloService,
		private spinnerService: SpinnerService
	) {
		this.client = this.apolloService.getClient();
	}

	public get titleText(): string {
		return this.bookId === 0 ? `New Book` : `Edit Book`;
	}

	public get subtitleText(): string {
		return this.bookId === 0 ? 'Create new book' : `ID:${this.bookId}`;
	}

	public ngOnInit(): void {
		this.bookId = parseInt(this.route.snapshot.params['id']);
		if (!this.bookId) this.bookId = 0;

		this.spinnerService.showSpinner();
		this.client
			.query<GetBookByIdQuery>({
				query: GetBookByIdDocument,
				variables: {
					id: this.bookId as number,
				},
			})
			.then((result) => {
				this.bookForm.patchValue({...result.data.book});
				this.spinnerService.stopSpinner();
			})
			.catch((error) => {
				console.error(error);
			});
	}
}
