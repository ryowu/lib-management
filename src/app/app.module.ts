import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksAdminComponent } from './pages/books-admin/books-admin.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		AboutComponent,
		BooksAdminComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatListModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatSlideToggleModule,
		MatToolbarModule,
    OverlayModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
