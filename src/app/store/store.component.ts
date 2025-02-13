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
      name: 'Cotton Tote Bag',
      description: 'A durable and eco-friendly bag, perfect for everyday use, featuring traditional Moroccan designs.',
      price: 250.99,
      image: 'assets/images/il_600x600.5193859488_6ux6.webp',
      category: 'statues'
    },
    {
      id: 2,
      name: 'Blankets from Chefchaouen',
      description: ' Soft, handwoven blankets inspired by the iconic blue hues of Chefchaouen.',
      price: 190.99,
      image: 'assets/images/raj-tent-club-raj-landscape-0238002001588073214921122760.webp',
      category: 'statues'
    },
    {
      id: 3,
      name: 'Berber carpets',
      description: 'Authentic, hand-knotted carpets showcasing vibrant Berber patterns.',
      price: 290.99,
      image: 'assets/images/1000_F_162701638_ip2pod07xMgW5z8obqhSXSOCMeXmSwa1.jpg',
      category: 'decor'
    },
    {
      id: 4,
      name: 'Thuya Wood Boxes from Essaouria',
      description: 'Exquisite, hand-carved wooden boxes made from rare Thuya wood.',
      price: 250.99,
      image: 'assets/images/boites-en-tuyya_9927398073_o_600x.webp',
      category: 'statues'
    },
    {
      id: 5,
      name: 'Key Holder',
      description: ' stylish and functional key holder, crafted with traditional Moroccan artistry.',
      price: 190.99,
      image: 'assets/images/il_600x600.5637448440_lxb0.webp',
      category: 'decor'
    },
    {
      id: 6,
      name: 'Camel Poster',
      description: 'A decorative poster featuring camels, capturing the essence of Moroccan desert landscapes.',
      price: 290.99,
      image: 'assets/images/71jtZbQsskL.webp',
      category: 'posters'
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
  selectedPaymentMethod: 'card' | 'paypal' = 'card';
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
  onSubmitPayment() {
    alert('Card payment successful! Thank you for your purchase.');
    this.cart = []; // Clear the cart after payment
    this.showCart = false; // Hide the cart section
  }
  onPaypalPayment() {
    alert('Redirecting to PayPal...');
    // Add PayPal integration logic here
    this.cart = []; // Clear the cart after payment
    this.showCart = false; // Hide the cart section
}
}