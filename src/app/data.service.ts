import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private offers = [
    // Your offers data here
  ];

  constructor() { }

  getOffers(): Observable<any[]> {
    return of(this.offers);  // Convert array to Observable
  }
}
