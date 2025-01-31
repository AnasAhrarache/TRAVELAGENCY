import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';





interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  feedback: string;
  rating: number;
}

interface TripLocation {
  id: number;
  title: string;
  image: string;
  type?: string;
  price?: string;
  duration?: string;
  rating?: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  booking = {
    destination: '',
    persons: 1,
    checkIn: '',
    checkOut: ''
  };

  cards = [
    { image: 'assets/images/wallpaperflare.com_wallpaper (2).jpg', name: 'lkhla', location: 'Sahara' },
    { image: 'assets/images/wallpaperflare.com_wallpaper (3).jpg', name: 'jam3 lfna', location: 'Marrakech' },
    { image: 'assets/images/1392643.jpg', name: 'Hassan', location: 'Rabat' },
    { image: 'assets/images/1483304.jpg', name: 'Dakchi dyal', location: 'Fes' }
  ];

  currentIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    } else {
      this.fetchNewCards();
      this.currentIndex = this.cards.length - 4;
      this.cdr.detectChanges();
    }
  }

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

    this.cards = [...this.cards, ...newCards];
  }

  offers = [
    {
      title: 'Chefchaouen',
      description: '5 nights and 4 days in a 5-star hotel, breakfast and lunch included. Very popular during the renaissance.',
      price: 5500,
      image: 'assets/images/pexels-photo-3061496.jpeg',
      stars: '🌟🌟🌟🌟'
    },
    {
      title: 'Essaouira',
      description: '5 nights and 4 days in a 5-star hotel, breakfast and lunch included. Passage through.',
      price: 3900,
      image: 'assets/images/Essaouira-1.jpg',
      stars: '🌟🌟🌟'
    },
    {
      title: 'Le Palais Namaskar, Marrakech',
      description: '3 nights and 2 days in a 5-star hotel, breakfast and lunch included. Explore world-class heritage sites.',
      price: 8999,
      image: 'assets/images/1392629.jpg',
      stars: '🌟🌟🌟🌟🌟'
    }
  ];

  currentIndex2 = -1;

  nextSlide() {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.offers.length;
  }

  prevSlide() {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.offers.length) % this.offers.length;
  }

  locations: TripLocation[] = [
    {
      id: 1,
      title: "Medina Street Food Tour",
      image: "assets/images/08-photo-workshop-adventures-laurie-cohen-morocco.jpg",
      type: "GUIDED TOUR",
      price: "DH 199/Day",
      duration: "2 Days tour",
      rating: 4.5
    },
    {
      id: 2,
      title: "Traditional Home-Cooked ",
      image: "assets/images/pexels-ali-dashti-506667798-22890025.jpg",
      type: "GUIDED TOUR",
      price: "DH 350/Day",
      duration: "3 Days tour",
      rating: 5
    },
    {
      id: 3,
      title: "Dessert and Sweets Tour",
      image: "assets/images/pexels-taryn-elliott-3889842.jpg",
      type: "GUIDED TOUR",
      price: "DH 150/Day",
      duration: "2 Days tour",
      rating: 4.8
    },
    {
      id: 4,
      title: "Moroccan Souk ",
      image: "assets/images/pexels-doraklimova-7835702.jpg",
      type: "GUIDED TOUR",
      price: "DH 199/Day",
      duration: "3 Days tour",
      rating: 4.7
    }
  ];

  ngOnInit(): void {}

  getRatingArray(rating: number): number[] {
    return Array(5).fill(0).map((_, index) => index < Math.floor(rating) ? 1 : 0);
  }




  currentSlide3 = 0;
  autoSlideInterval: any;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Anas Ahrarache',
      role: 'Accountant',
      company: '',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      feedback: 'Hadchi zin tbarklah ',
      rating: 5
    },
    {
      id: 2,
      name: 'Ayoub Arich',
      role: 'Journalist',
      company: '',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Smith',
      feedback: 'wa3r hadchi tbarklah',
      rating: 5
    },
    {
      id: 3,
      name: 'Hemmam Karmas',
      role: 'Managing Director',
      company: '',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tamara',
      feedback: 'Tchenchit hada',
      rating: 5
    }
  ];

  ngOnInit3() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide3() {
    this.currentSlide3 = (this.currentSlide3 + 1) % this.testimonials.length;
  }

  prevSlide3() {
    this.currentSlide3 = (this.currentSlide3 - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentSlide3 = index;
  }

  pauseSlider() {
    this.stopAutoSlide();
  }

  resumeSlider() {
    this.startAutoSlide();
  }
}


























