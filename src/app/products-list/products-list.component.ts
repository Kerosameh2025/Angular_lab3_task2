import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  benefits: string[];
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <h1 class="text-center mb-4">Product Cards</h1>
    <div class="row">
      <div class="col-md-4 mb-4" *ngFor="let product of products; trackBy: trackById">
        <app-product-card [product]="product"></app-product-card>
      </div>
    </div>
  `
})
export class ProductsListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Vitamin C Brightening Serum',
      description: 'Revitalizes skin and reduces dark spots with potent vitamin C formula',
      price: 29.99,
      quantity: 10,
      image: 'https://i.pinimg.com/736x/4d/a0/16/4da01636323adb5ab582015507d4dcd8.jpg',
      benefits: ['Brightens complexion', 'Reduces hyperpigmentation', 'Boosts collagen']
    },
    {
      id: 2,
      name: 'Hyaluronic Acid Hydration Serum',
      description: 'Deep hydration serum for plump, dewy skin with hyaluronic molecules',
      price: 34.99,
      quantity: 1,
      image: 'https://i.pinimg.com/736x/76/0b/99/760b99b614e90b5d90c542f8063e3f18.jpg',
      benefits: ['Intense hydration', 'Reduces fine lines', 'Improves skin elasticity']
    },
    {
      id: 3,
      name: 'Retinol Night Repair Serum',
      description: 'Anti-aging treatment serum for overnight skin renewal',
      price: 39.99,
      quantity: 0,
      image: 'https://i.pinimg.com/736x/a6/89/14/a68914642445fa473c612b06fed3399b.jpg',
      benefits: ['Reduces wrinkles', 'Improves skin texture', 'Stimulates cell turnover']
    }
  ];

  trackById(index: number, product: Product): number {
    return product.id;
  }
}
