import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Add this import

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  imports: [CommonModule, FormsModule]
})
export class StoreComponent {
  products = [
    {
      id: 1,
      name: 'Eiffel Tower Replica',
      description: 'A beautiful miniature replica of the Eiffel Tower.',
      price: 25.99,
      image: 'assets/images/pexels-photo-4502967.jpeg',
      category: 'statues'
    },
    {
      id: 2,
      name: 'Statue of Liberty Figurine',
      description: 'A detailed figurine of the Statue of Liberty.',
      price: 19.99,
      image: 'assets/images/Marrakech-Medina.jpg',
      category: 'statues'
    },
    {
      id: 3,
      name: 'Taj Mahal Snow Globe',
      description: 'A mesmerizing snow globe featuring the Taj Mahal.',
      price: 29.99,
      image: 'assets/images/pexels-ali-dashti-506667798-22890025.jpg',
      category: 'decor'
    },
    {
      id: 4,
      name: 'Eiffel Tower Replica',
      description: 'A beautiful miniature replica of the Eiffel Tower.',
      price: 25.99,
      image: 'assets/images/pexels-photo-4502967.jpeg',
      category: 'statues'
    },
    {
      id: 5,
      name: 'Statue of Liberty Figurine',
      description: 'A detailed figurine of the Statue of Liberty.',
      price: 19.99,
      image: 'assets/images/Marrakech-Medina.jpg',
      category: 'statues'
    },
    {
      id: 6,
      name: 'Taj Mahal Snow Globe',
      description: 'A mesmerizing snow globe featuring the Taj Mahal.',
      price: 29.99,
      image: 'assets/images/pexels-ali-dashti-506667798-22890025.jpg',
      category: 'decor'
    },
  ];

  // Filtering
  categories = ['statues', 'decor', 'posters'];
  selectedCategory = 'all';
  filteredProducts = this.products;

  // Cart
  cart: any[] = [];
  showCart = false;

  constructor() {}

  // Filter products by category
  filterProducts() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    }
  }

  // Add product to cart
  addToCart(product: any) {
    this.cart.push(product);
  }

  // Remove product from cart
  removeFromCart(item: any) {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
  }

  // Calculate total price
  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}