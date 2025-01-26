import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ensure HomeComponent is standalone

export const routes: Routes = [
  { path: '', component: HomeComponent } // Root route for HomeComponent
];
