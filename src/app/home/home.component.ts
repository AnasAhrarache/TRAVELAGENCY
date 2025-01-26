import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true, // Mark as a standalone component
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  booking = {
    destination: '',
    persons: 1,
    checkIn: '',
    checkOut: ''
  };

  onSubmit() {
    console.log('Booking Data:', this.booking);
  }
  cards = [
    { image: 'assets/images/wallpaperflare.com_wallpaper (2).jpg', name: 'lkhla', location: 'Sahara' },
    { image: 'assets/images/wallpaperflare.com_wallpaper (3).jpg', name: 'jam3 lfna', location: 'Marrakech' },
    { image: 'assets/images/1392643.jpg', name: 'Hassan', location: 'Rabat' },
    { image: 'assets/images/dye-pits-morocco-ir11bjlttloy9lsk.webp', name: 'Dakchi dyal', location: 'Fes' }
  ];

  currentIndex = 0; // Index of the current card

  

  // Compute the transform style based on the index
  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  // Move to the next card
  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    } else {
      // Fetch new cards if at the last card and reset currentIndex to the first new card
      const previousLength = this.cards.length;
      this.fetchNewCards();
  
      // Ensure the currentIndex reflects the position of the first new card
      this.currentIndex = previousLength; // Start from the new cards
    }
  }

  // Move to the previous card
  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  private fetchNewCards() {
    const newCards = [
      { image: 'assets/images/wallpaperflare.com_wallpaper (2).jpg', name: 'lkhla', location: 'Sahara' },
      { image: 'assets/images/wallpaperflare.com_wallpaper (3).jpg', name: 'jam3 lfna', location: 'Marrakech' },
      { image: 'assets/images/1392643.jpg', name: 'Hassan', location: 'Rabat' },
      { image: 'assets/images/dye-pits-morocco-ir11bjlttloy9lsk.webp', name: 'Dakchi dyal', location: 'Fes' }
    ];
  
    this.cards = [...this.cards, ...newCards]; // Append new cards to the existing array
  }
}


  