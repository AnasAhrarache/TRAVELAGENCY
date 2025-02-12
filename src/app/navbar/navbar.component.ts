import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule ,Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule], 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentMode: string = 'login'; 

  constructor(private route: ActivatedRoute, private router: Router) {
   
  }

  isAuthMode(mode: string): boolean {
    return this.currentMode === mode;
  } 
}

