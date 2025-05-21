import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TracksListComponent } from './tracks-list/tracks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HomeComponent, ProductsListComponent, TracksListComponent],
  template: `
    <app-navbar (pageSelected)="onPageSelected($event)"></app-navbar>

    <div class="container">
      <app-home *ngIf="currentPage === 'home'"></app-home>
      <app-products-list *ngIf="currentPage === 'products'"></app-products-list>
      <app-tracks-list *ngIf="currentPage === 'tracks'"></app-tracks-list>
    </div>
  `
})
export class AppComponent {
  currentPage: string = 'home';

  onPageSelected(page: string) {
    this.currentPage = page;
  }
}
