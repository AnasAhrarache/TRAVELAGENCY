import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../data.service';





interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  feedback: string;
  rating: number;
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
  offers:any;

  constructor( 
    private dataService: DataService,
    private router: Router  // Inject Router here
  ){}

  ngOnInit(): void {
    this.offers = this.dataService.getoffers();
  }  

  showdetail(offerid: number){
    this.router.navigate(['/offer',offerid])
    console.log(offerid)
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
  currentIndex2 = -1;
  nextSlide() {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.offers.length;
  }

  prevSlide() {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.offers.length) % this.offers.length;
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



























