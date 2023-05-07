import { Injectable } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DATABASE_URL } from '../constants';

@Injectable({
	providedIn: 'root',
})
export class ApolloService {
	private client: ApolloClient<any>;

	constructor() {
		this.client = new ApolloClient({
			uri: DATABASE_URL,
			cache: new InMemoryCache(),
		});
	}

	public getClient(): ApolloClient<any> {
		return this.client;
	}
}
