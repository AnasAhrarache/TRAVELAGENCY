import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  standalone: true,
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  currentIndex: number = 0;
  slideItems!: NodeListOf<HTMLElement>;
  totalItems!: number;
  slideInterval!: any;
  intervalTime: number = 2500; // 2.5 secondes pour auto-slide

  ngOnInit(): void {
    this.slideItems = document.querySelectorAll('.slide-item');
    this.totalItems = this.slideItems.length;
    this.showSlide(this.currentIndex);
    this.startAutoSlide();
  }

  showSlide(index: number): void {
    // Affiche le slide correspondant et active la puce correspondante
    this.slideItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });

    const dots: NodeListOf<Element> = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.showSlide(this.currentIndex);
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.totalItems - 1 : this.currentIndex - 1;
    this.showSlide(this.currentIndex);
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => this.nextSlide(), this.intervalTime);
  }

  resetAutoSlide(): void {
    clearInterval(this.slideInterval);
    this.startAutoSlide();
  }

  onPrevButtonClick(): void {
    this.prevSlide();
    this.resetAutoSlide();
  }

  onNextButtonClick(): void {
    this.nextSlide();
    this.resetAutoSlide();
  }
}