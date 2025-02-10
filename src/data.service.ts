import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  offers = [
    {
      id:1,
      title: 'Chefchaouen',
      datedepart: '23 mars',
      datefin:'26 mars',
      time:'5 nighs and 4 days',
      description: '5 nighs and 4 days in a 5-star hotel, breakfast and lunch included. Very popular during the renaissance.',
      price: 5500,
      villedepart:'Rabat',
      image: 'assets/images/08-photo-workshop-adventures-laurie-cohen-morocco.jpg',
      stars: '🌟🌟🌟🌟',
      programmes: [
        [
          {
            idd: 1,
            time1: '10h00',
            desc1: 'aaaaaa',
            time2: '13h00',
            desc2: 'bbbbb',
            time3: '18h00',
            desc3: 'ccccc',
            image: 'assets/images/08-photo-workshop-adventures-laurie-cohen-morocco.jpg'
          }
        ],
        [
          {
            idd: 2,
            time1: '10h00',
            desc1: 'aaaaaa',
            time2: '13h00',
            desc2: 'bbbbb',
            time3: '18h00',
            desc3: 'ayoubbb',
            image: 'assets/images/08-photo-workshop-adventures-laurie-cohen-morocco.jpg'
          }
        ]
      ]
    },
    {
      id:2,
      title: 'Essaouira',
      description: '5 nights and 4 days in a 5-star hotel, breakfast and lunch included. Passage through.',
      price: 3900,
      image: 'assets/images/Essaouira-1.jpg',
      stars: '🌟🌟🌟'
    },
    {
      id:3,
      title: 'Le Palais Namaskar, Marrakech',
      description: '3 nights and 2 days in a 5-star hotel, breakfast and lunch included. Explore world-class heritage sites.',
      price: 8999,
      image: 'assets/images/1392629.jpg',
      stars: '🌟🌟🌟🌟🌟'
    }
  ];

  constructor() {}

  getoffers(){
    return this.offers
  }
}
