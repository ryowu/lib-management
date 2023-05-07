import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksAdminComponent } from './pages/books-admin/books-admin.component';
import { ReturnComponent } from './pages/return/return.component';
import { BorrowComponent } from './pages/borrow/borrow.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'books', component: BooksAdminComponent },
  { path: 'borrow', component: BorrowComponent },
  { path: 'return', component: ReturnComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
