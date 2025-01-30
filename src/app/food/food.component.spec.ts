import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComponent } from './food.component';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



/*-------------------------------------------------*/

let currentIndex: number = 0;
const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slide-image');
const totalImages: number = images.length;
const intervalTime: number = 3000; 
let slideInterval: number;

function showImage(index: number): void {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
        const dots: NodeListOf<Element> = document.querySelectorAll('.dot');
        if (dots[i]) {
            dots[i].classList.toggle('active', i === index);
        }
    });
}

function nextImage(): void {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function resetAutoSlide(): void {
    clearInterval(slideInterval); 
    slideInterval = setInterval(nextImage, intervalTime) as unknown as number; 
}

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

if (leftButton) {
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        showImage(currentIndex);
        resetAutoSlide(); 
    });
}

if (rightButton) {
    rightButton.addEventListener('click', () => {
        nextImage();
        resetAutoSlide(); 
    });
}

showImage(currentIndex);
slideInterval = setInterval(nextImage, intervalTime) as unknown as number;

