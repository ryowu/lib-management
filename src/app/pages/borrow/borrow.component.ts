import { Component } from '@angular/core';

@Component({
	selector: 'app-borrow',
	templateUrl: './borrow.component.html',
	styleUrls: ['./borrow.component.scss'],
})
export class BorrowComponent {
	public userName = '';
	public applyUserName(){
		this.userName = 'Tom Matthrew';
	}
}
