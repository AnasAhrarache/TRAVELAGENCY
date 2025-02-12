import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
})
export class LoginComponent implements OnInit {
  isRightPanelActive = false;
  loginEmail = '';
  loginPassword = '';
  signupName = '';
  signupEmail = '';
  signupPassword = '';

  currentMode: string = 'login';

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentMode = params['mode'] || 'login';
      this.togglePanel(this.currentMode === 'login');
    }); 
  }
  isAuthMode(mode: string): boolean {
    return this.currentMode === mode;
  }
  togglePanel(isSignUp: boolean) {
    if (isSignUp) {
      this.isRightPanelActive = false;
    } else 
      this.isRightPanelActive = true; 
  } 
}