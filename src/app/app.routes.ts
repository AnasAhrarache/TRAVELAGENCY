import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { OfferComponent } from './offer/offer.component';
import { ExploreComponent } from './explore/explore.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Root route for HomeComponent
  { path: 'explore', component: ExploreComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'offer/:id', component: OfferComponent }

];
