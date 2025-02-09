import { Component } from '@angular/core';


@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})

export class ExploreComponent {
  currentQuestion: number = 1;
  totalQuestions: number = 3;
  answers: { [key: string]: string } = {};

  nextQuestion(): void {
    if (this.currentQuestion < this.totalQuestions) {
      const currentQuestionElement = document.getElementById(`question${this.currentQuestion}`);
      if (currentQuestionElement) {
        currentQuestionElement.style.display = "none";
      }
      this.currentQuestion++;
      const nextQuestionElement = document.getElementById(`question${this.currentQuestion}`);
      if (nextQuestionElement) {
        nextQuestionElement.style.display = "block";
      }
      this.updateProgress();
    } else {
      this.showResult();
    }
  }

  updateProgress(): void {
    const progress = (this.currentQuestion / this.totalQuestions) * 100;
    const progressElement = document.getElementById("progress");
    if (progressElement) {
      progressElement.style.width = `${progress}%`;
    }
  }

  showResult(): void {
    const q1 = document.querySelector('input[name="q1"]:checked') as HTMLInputElement;
    const q2 = document.querySelector('input[name="q2"]:checked') as HTMLInputElement;
    const q3 = document.querySelector('input[name="q3"]:checked') as HTMLInputElement;
  
    let destination = "";
    let image = "";
  
    // Logic to determine destination
    if (q1.value === "culture") {
      if (q2.value === "warm" && q3.value === "medium") {
        destination = "Marrakech - Explore the vibrant souks and historic palaces.";
        image = "assets/images/wallpaperflare.com_wallpaper (3).jpg";
      } else {
        destination = "Fes - Discover the ancient medina and rich history.";
        image = "assets/images/morocco-4034924_1920.jpg";
      }
    } else if (q1.value === "beach") {
      if (q2.value === "warm" && q3.value === "high") {
        destination = "Agadir - Enjoy the beautiful beaches and luxury resorts.";
        image = "assets/images/agadir-4834349_1920.jpg";
      } else {
        destination = "Essaouira - A charming coastal town with a relaxed vibe.";
        image = "assets/images/morocco-1463212_1920.jpg";
      }
    } else if (q1.value === "adventure") {
      if (q2.value === "hot" && q3.value === "low") {
        destination = "Todra Gorge - Perfect for hiking and rock climbing.";
        image = "assets/images/14-photo-workshop-adventures-morocco.jpg";
      } else {
        destination = "Atlas Mountains - Ideal for trekking and outdoor adventures.";
        image = "assets/images/desert-3997361_1920.jpg";
      }
    } else if (q1.value === "desert") {
      if (q2.value === "hot" && q3.value === "medium") {
        destination = "Merzouga - Experience the magic of the Sahara Desert.";
        image = "https://via.placeholder.com/600x400?text=Merzouga";
      } else {
        destination = "Zagora - A gateway to the desert with stunning landscapes.";
        image = "assets/images/zagora-1541152_1920.jpg";
      }
    } else {
      destination = "Fes - Discover the ancient medina and rich history.";
      image = "assets/images/morocco-4034924_1920.jpg";
    }
  
    // Display result
    const destinationElement = document.getElementById("destination");
    if (destinationElement) {
      destinationElement.textContent = destination;
    }
    const destinationImageElement = document.getElementById("destinationImage") as HTMLImageElement;
    if (destinationImageElement) {
      destinationImageElement.src = image;
    }
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.style.display = "block";
    }
    const quizElement = document.getElementById("quiz");
    if (quizElement) {
      quizElement.style.display = "none";
    }
  }
}

