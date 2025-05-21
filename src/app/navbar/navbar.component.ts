import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container">
        <a class="navbar-brand" href="#">ITI Projects</a>
        <div>
          <button class="btn btn-outline-primary me-2" (click)="selectPage('home')">Home</button>
          <button class="btn btn-outline-primary me-2" (click)="selectPage('products')">Products</button>
          <button class="btn btn-outline-primary" (click)="selectPage('tracks')">ITI Tracks</button>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  @Output() pageSelected = new EventEmitter<string>();

  selectPage(page: string) {
    this.pageSelected.emit(page);
  }
}
