import { Component } from '@angular/core';

type Book = {
	author: string;
	title: string;
	description: string;
	publishDate: string;
};

@Component({
	selector: 'app-borrow',
	templateUrl: './borrow.component.html',
	styleUrls: ['./borrow.component.scss'],
})
export class BorrowComponent {
	public userName = '';
	public books: Book[] = [
		{
			author: 'J.K. Rowling',
			title: "Harry Potter and the Philosopher's Stone",
			description:
				'The first book in the Harry Potter series, in which Harry discovers the wizarding world and his place within it.',
			publishDate: '1997-06-26',
		},
		{
			author: 'J.R.R. Tolkien',
			title: 'The Lord of the Rings',
			description:
				'A classic epic fantasy series in which a hobbit named Frodo is tasked with destroying the One Ring, which was forged by the evil Sauron.',
			publishDate: '1954-07-29',
		},
		{
			author: 'George Orwell',
			title: '1984',
			description:
				'A dystopian novel set in a totalitarian society, in which the government constantly monitors and manipulates the lives of its citizens.',
			publishDate: '1949-06-08',
		},
		{
			author: 'Harper Lee',
			title: 'To Kill a Mockingbird',
			description:
				'A Pulitzer Prize-winning novel set in the American South during the Great Depression, which explores themes of racism, injustice, and coming of age.',
			publishDate: '1960-07-11',
		},
		{
			author: 'Gabriel Garcia Marquez',
			title: 'One Hundred Years of Solitude',
			description:
				'A landmark novel of the 20th century, which tells the story of the Buendia family over seven generations in the fictional town of Macondo.',
			publishDate: '1967-05-30',
		},
	];

	public demoBooks: Book[] = [
		{
			author: 'John Smith',
			title: 'The Art of Programming',
			description:
				'A guide to writing high-quality code for any application.',
			publishDate: '2018-01-01',
		},
		{
			author: 'Jane Doe',
			title: 'Mastering Angular',
			description:
				'Learn how to build powerful web applications with Angular.',
			publishDate: '2019-06-01',
		},
		{
			author: 'Bob Johnson',
			title: 'The History of Computing',
			description:
				'A comprehensive overview of the evolution of computing technology.',
			publishDate: '2016-03-01',
		},
	];

	public applyUserName() {
		this.userName = 'Tom Matthrew';
	}

	public removeBook(index: number) {
		this.books.splice(index, 1);
	}

	public addBook() {
		const newBook =
			this.demoBooks[Math.floor(Math.random() * this.demoBooks.length)];
		this.books.push(newBook);
	}
}
