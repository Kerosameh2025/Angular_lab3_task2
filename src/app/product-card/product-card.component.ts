import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" style="width: 18rem;" *ngIf="product">
      <img [src]="product.image" class="card-img-top img-fluid" [alt]="product.name" style="height: 300px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="text-muted">Price: {{ product.price }}</p>
        <p class="text-muted">Available: {{ product.quantity }}</p>
        <button 
          class="btn mt-2" 
          [ngClass]="getButtonClass()"
          [disabled]="product.quantity === 0">
          {{ getButtonText() }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;

  getButtonClass(): string {
    if (this.product.quantity === 0) {
      return 'btn-danger';
    } else if (this.product.quantity === 1) {
      return 'btn-warning';
    } else {
      return 'btn-success';
    }
  }

  getButtonText(): string {
    if (this.product.quantity === 0) {
      return 'Sold Out';
    } else if (this.product.quantity === 1) {
      return 'Buy Now (Last One!)';
    } else {
      return 'Add to Cart';
    }
  }
}
