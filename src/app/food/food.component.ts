import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  standalone: true, // Marque ce composant comme autonome
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  currentIndex: number = 0; // Initialisation de l'index de l'image
  images!: NodeListOf<HTMLImageElement>; // Utilisation de `!` pour indiquer que la propriété sera initialisée
  totalImages!: number; // Utilisation de `!` pour indiquer que la propriété sera initialisée
  slideInterval!: any;  // Remplace NodeJS.Timeout par any
  intervalTime: number = 2500; // 3 secondes pour auto-slide

  ngOnInit(): void {
    // Initialisation des propriétés dans ngOnInit
    this.images = document.querySelectorAll('.slide-image');
    this.totalImages = this.images.length;
    this.showImage(this.currentIndex);
    this.slideInterval = setInterval(() => this.nextImage(), this.intervalTime);
  }

  showImage(index: number): void {
    // Affiche l'image correspondante et active la puce correspondante
    this.images.forEach((img, i) => {
      img.style.display = (i === index) ? 'block' : 'none';
      const dots: NodeListOf<Element> = document.querySelectorAll('.dot');
      if (dots[i]) {
        dots[i].classList.toggle('active', i === index);
      }
    });
  }

  nextImage(): void {
    // Passe à l'image suivante
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.showImage(this.currentIndex);
  }

  prevImage(): void {
    // Passe à l'image précédente
    this.currentIndex = (this.currentIndex === 0) ? this.totalImages - 1 : this.currentIndex - 1;
    this.showImage(this.currentIndex);
  }

  resetAutoSlide(): void {
    // Réinitialise l'auto-slide en réinitialisant l'intervalle
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => this.nextImage(), this.intervalTime);
  }

  onPrevButtonClick(): void {
    // Navigation vers l'image précédente
    this.prevImage();
    this.resetAutoSlide(); // Réinitialise l'auto-slide après une action manuelle
  }

  onNextButtonClick(): void {
    // Navigation vers l'image suivante
    this.nextImage();
    this.resetAutoSlide(); // Réinitialise l'auto-slide après une action manuelle
  }
}
