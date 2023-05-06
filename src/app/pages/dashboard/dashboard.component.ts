import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public content: any;
  public ngOnInit(): void {
    fetch('https://lib-mgr-db.vercel.app/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query MyQuery {
			allMyFirstTables {
			  nodes {
				id
				name
			  }
			}
		  }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => this.content = data);
  }
}
