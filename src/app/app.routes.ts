import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Root route for HomeComponent
  { path: 'food', component: FoodComponent },
  { path: 'store', component: StoreComponent },
];
