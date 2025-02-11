import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  offers = [
    {
        id: 1,
        title: 'Chefchaouen',
        datedepart: '23 mars',
        datefin: '26 mars',
        time: '5 nuits et 4 jours',
        description: 'Séjour dans un hôtel 5 étoiles, petit-déjeuner et déjeuner inclus.',
        price: 5500,
        villedepart: 'Rabat',
        image: 'assets/images/1392634.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant traditionnel' }
                ],
                image: 'assets/images/1392634.jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Randonnée aux cascades d’Akchour' },
                    { time: '14h00', description: 'Déjeuner en pleine nature' },
                    { time: '18h00', description: 'Retour à l’hôtel et temps libre' }
                ],
                image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Visite du musée de Chefchaouen' },
                    { time: '13h00', description: 'Dégustation de spécialités locales' },
                    { time: '16h00', description: 'Balade dans la médina bleue' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Rabat' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 2,
        title: 'Marrakech',
        datedepart: '5 avril',
        datefin: '10 avril',
        time: '6 nuits et 5 jours',
        description: 'Séjour de luxe avec excursions et dîner spectacle inclus.',
        price: 7200,
        villedepart: 'Casablanca',
        image: 'assets/images/marrakech.jpg',
        stars: '🌟🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée à Marrakech et installation à l’hôtel' },
                    { time: '14h00', description: 'Déjeuner dans un riad' },
                    { time: '17h00', description: 'Visite de la place Jemaa el-Fna' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Excursion aux jardins Majorelle' },
                    { time: '15h00', description: 'Balade en calèche dans la médina' },
                    { time: '19h00', description: 'Dîner sur une terrasse avec vue' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '08h00', description: 'Départ pour une excursion dans l’Atlas' },
                    { time: '12h00', description: 'Déjeuner dans un village berbère' },
                    { time: '16h00', description: 'Randonnée dans les montagnes' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '10h00', description: 'Temps libre pour le shopping' },
                    { time: '14h00', description: 'Visite du palais de la Bahia' },
                    { time: '20h00', description: 'Dîner spectacle Fantasia' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 5',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '11h00', description: 'Départ vers Casablanca' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 3,
        title: 'Merzouga',
        datedepart: '10 mai',
        datefin: '15 mai',
        time: '5 nuits et 4 jours',
        description: 'Aventure dans le désert avec balade en chameau et nuit en bivouac.',
        price: 6300,
        villedepart: 'Fès',
        image: 'assets/images/merzouga.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '09h00', description: 'Départ vers Merzouga en 4x4' },
                    { time: '13h00', description: 'Pause déjeuner dans un village berbère' },
                    { time: '17h00', description: 'Balade en chameau au coucher du soleil' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '06h00', description: 'Lever de soleil sur les dunes' },
                    { time: '08h00', description: 'Petit-déjeuner' },
                    { time: '10h00', description: 'Exploration du désert en 4x4' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '09h00', description: 'Rencontre avec les nomades' },
                    { time: '14h00', description: 'Visite d’un village saharien' },
                    { time: '19h00', description: 'Dîner sous les étoiles' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '07h00', description: 'Petit-déjeuner et retour vers Fès' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 4,
        title: 'Agadir',
        datedepart: '15 juin',
        datefin: '20 juin',
        time: '5 nuits et 4 jours',
        description: 'Détente sur les plages d\'Agadir avec activités nautiques incluses.',
        price: 4800,
        villedepart: 'Marrakech',
        image: 'assets/images/agadir.jpg',
        stars: '🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner au bord de la plage' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Excursion en bateau pour observer les dauphins' },
                    { time: '14h00', description: 'Déjeuner sur le bateau' },
                    { time: '18h00', description: 'Retour à l’hôtel et temps libre' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Visite du souk d\'Agadir' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' },
                    { time: '16h00', description: 'Temps libre pour le shopping' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Marrakech' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 5,
        title: 'Essaouira',
        datedepart: '1 juillet',
        datefin: '5 juillet',
        time: '4 nuits et 3 jours',
        description: 'Séjour culturel avec visite de la médina et activités nautiques.',
        price: 4000,
        villedepart: 'Casablanca',
        image: 'assets/images/essaouira.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant de poisson' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Visite de la médina et des ateliers d\'artisans' },
                    { time: '14h00', description: 'Déjeuner dans un riad' },
                    { time: '18h00', description: 'Temps libre pour explorer la ville' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Activités nautiques (surf ou planche à voile)' },
                    { time: '13h00', description: 'Déjeuner au bord de la plage' },
                    { time: '16h00', description: 'Balade en bord de mer' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Casablanca' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 6,
        title: 'Fès',
        datedepart: '10 août',
        datefin: '15 août',
        time: '5 nuits et 4 jours',
        description: 'Découverte de la ville impériale avec visites culturelles et gastronomiques.',
        price: 5000,
        villedepart: 'Rabat',
        image: 'assets/images/fes.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant traditionnel' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Visite de la médina de Fès' },
                    { time: '14h00', description: 'Déjeuner dans un riad' },
                    { time: '18h00', description: 'Temps libre pour explorer la ville' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Visite des tanneries de Fès' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' },
                    { time: '16h00', description: 'Visite du palais royal' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Rabat' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 7,
        title: 'Tanger',
        datedepart: '20 septembre',
        datefin: '25 septembre',
        time: '5 nuits et 4 jours',
        description: 'Séjour à Tanger avec visite de la grotte d\'Hercule et balade en bord de mer.',
        price: 4500,
        villedepart: 'Casablanca',
        image: 'assets/images/tanger.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant de poisson' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Visite de la grotte d\'Hercule' },
                    { time: '14h00', description: 'Déjeuner en bord de mer' },
                    { time: '18h00', description: 'Balade sur la corniche de Tanger' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Visite du cap Spartel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' },
                    { time: '16h00', description: 'Temps libre pour explorer la ville' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Casablanca' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 8,
        title: 'Ouarzazate',
        datedepart: '5 octobre',
        datefin: '10 octobre',
        time: '5 nuits et 4 jours',
        description: 'Découverte des paysages désertiques et des studios de cinéma.',
        price: 5200,
        villedepart: 'Marrakech',
        image: 'assets/images/ouarzazate.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Visite des studios de cinéma' },
                    { time: '14h00', description: 'Déjeuner dans un restaurant traditionnel' },
                    { time: '18h00', description: 'Temps libre pour explorer la ville' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Excursion à la kasbah d\'Aït Benhaddou' },
                    { time: '13h00', description: 'Déjeuner dans un village berbère' },
                    { time: '16h00', description: 'Retour à Ouarzazate' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
           
        ]
    },
    {
        id: 9,
        title: 'Ifrane',
        datedepart: '15 novembre',
        datefin: '20 novembre',
        time: '5 nuits et 4 jours',
        description: 'Séjour dans la "petite Suisse du Maroc" avec activités en plein air.',
        price: 4700,
        villedepart: 'Fès',
        image: 'assets/images/ifrane.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Randonnée dans le parc national d\'Ifrane' },
                    { time: '14h00', description: 'Déjeuner en pleine nature' },
                    { time: '18h00', description: 'Retour à l’hôtel et temps libre' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Visite du lac d\'Ifrane' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' },
                    { time: '16h00', description: 'Temps libre pour explorer la ville' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Fès' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    },
    {
        id: 10,
        title: 'Dakhla',
        datedepart: '1 décembre',
        datefin: '6 décembre',
        time: '5 nuits et 4 jours',
        description: 'Aventure dans le désert de Dakhla avec activités nautiques et balades en 4x4.',
        price: 6000,
        villedepart: 'Casablanca',
        image: 'assets/images/dakhla.jpg',
        stars: '🌟🌟🌟🌟',
        programmes: [
            {
                day: 'Jour 1',
                schedule: [
                    { time: '10h00', description: 'Arrivée et installation à l’hôtel' },
                    { time: '13h00', description: 'Déjeuner dans un restaurant local' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 2',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner' },
                    { time: '11h00', description: 'Excursion en 4x4 dans le désert' },
                    { time: '14h00', description: 'Déjeuner en plein désert' },
                    { time: '18h00', description: 'Retour à l’hôtel et temps libre' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 3',
                schedule: [
                    { time: '10h00', description: 'Activités nautiques (kitesurf ou planche à voile)' },
                    { time: '13h00', description: 'Déjeuner au bord de la lagune' },
                    { time: '16h00', description: 'Temps libre pour se détendre' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            },
            {
                day: 'Jour 4',
                schedule: [
                    { time: '09h00', description: 'Petit-déjeuner et check-out' },
                    { time: '12h00', description: 'Départ vers Casablanca' }
                  ],
                  image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
            }
        ]
    }
];

  constructor() {}

  getoffers(){
    return this.offers
  }
}
