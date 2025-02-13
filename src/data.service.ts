import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    offers = [
        {
            id: 1,
            title: 'Chefchaouen',
            datedepart: 'March 23',
            datefin: 'March 26',
            time: '5 nights and 4 days',
            description: 'Stay in a 5-star hotel, breakfast and lunch included.',
            price: 5500,
            villedepart: 'Rabat',
            image: 'assets/images/pexels-photo-4652063.webp',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation session about Chefchaouen' },
                        { time: '01:00 PM', description: 'Lunch at a traditional restaurant' },
                        { time: '03:00 PM', description: 'Guided walk through the blue streets of the medina' },
                        { time: '06:00 PM', description: 'Relax at the hotel’s rooftop terrace with a view of the city' }
                    ],
                    image: 'assets/images/pexels-photo-4652127.jpeg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Hike to Akchour Waterfalls with a local guide' },
                        { time: '02:00 PM', description: 'Picnic lunch by the waterfalls' },
                        { time: '04:00 PM', description: 'Swim in the natural pools' },
                        { time: '06:00 PM', description: 'Return to the hotel and free time' },
                        { time: '08:00 PM', description: 'Dinner at a local riad with live Andalusian music' }
                    ],
                    image: 'assets/images/pexels-photo-4652063.webp',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Visit the Chefchaouen Museum and learn about the city’s history' },
                        { time: '01:00 PM', description: 'Tasting local specialties at a family-owned restaurant' },
                        { time: '03:00 PM', description: 'Workshop on traditional Moroccan pottery' },
                        { time: '06:00 PM', description: 'Sunset hike to the Spanish Mosque for panoramic views' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Visit a local cooperative to learn about olive oil and soap production' },
                        { time: '12:00 PM', description: 'Departure to Rabat' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
      
        {
            id: 2,
            title: 'Merzouga',
            datedepart: 'May 10',
            datefin: 'May 15',
            time: '5 nights and 4 days',
            description: 'Desert adventure with camel ride and overnight in a bivouac.',
            price: 6300,
            villedepart: 'Fes',
            image: 'assets/images/Moroccan-Desert-Photography-Tours.jpg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '09:00 AM', description: 'Departure to Merzouga by 4x4' },
                        { time: '01:00 PM', description: 'Lunch break in a Berber village with a visit to a local market' },
                        { time: '05:00 PM', description: 'Camel ride at sunset to the desert camp' },
                        { time: '07:00 PM', description: 'Traditional Berber dinner under the stars with live music' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '06:00 AM', description: 'Sunrise over the dunes' },
                        { time: '08:00 AM', description: 'Breakfast at the camp' },
                        { time: '10:00 AM', description: 'Desert exploration by 4x4, including visits to fossil sites and nomadic families' },
                        { time: '02:00 PM', description: 'Lunch in the desert' },
                        { time: '04:00 PM', description: 'Sandboarding on the dunes' },
                        { time: '07:00 PM', description: 'Stargazing session with a local astronomer' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and return to Merzouga village' },
                        { time: '11:00 AM', description: 'Visit to a local cooperative to learn about desert agriculture' },
                        { time: '02:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '04:00 PM', description: 'Free time to relax or explore the village' },
                        { time: '07:00 PM', description: 'Farewell dinner with a bonfire' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '07:00 AM', description: 'Breakfast and departure to Fes' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 3,
            title: 'Marrakech',
            datedepart: 'April 5',
            datefin: 'April 10',
            time: '5 nights and 4 days',
            description: 'Luxury stay with excursions and dinner show included.',
            price: 7200,
            villedepart: 'Casablanca',
            image: 'assets/images/pexels-photo-2610815.jpeg',
            stars: '⭐⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival in Marrakech and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome mint tea and briefing about the trip' },
                        { time: '02:00 PM', description: 'Lunch at a riad' },
                        { time: '05:00 PM', description: 'Guided tour of Jemaa el-Fna Square and Koutoubia Mosque' },
                        { time: '08:00 PM', description: 'Dinner at a rooftop restaurant with a view of the square' }
                    ],
                    image: 'assets/images/pexels-photo-2610815.jpeg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Excursion to the Majorelle Gardens and Yves Saint Laurent Museum' },
                        { time: '01:00 PM', description: 'Lunch at a trendy café in the gardens' },
                        { time: '03:00 PM', description: 'Carriage ride through the medina with stops at artisan workshops' },
                        { time: '07:00 PM', description: 'Dinner on a terrace with live Gnaoua music' }
                    ],
                    image: 'assets/images/pexels-photo-2610815.jpeg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '08:00 AM', description: 'Departure for an excursion to the Atlas Mountains' },
                        { time: '10:00 AM', description: 'Visit a Berber village and enjoy a traditional tea ceremony' },
                        { time: '12:00 PM', description: 'Lunch in a Berber home' },
                        { time: '02:00 PM', description: 'Hike to a nearby waterfall' },
                        { time: '06:00 PM', description: 'Return to Marrakech and free time' }
                    ],
                    image: 'assets/images/pexels-photo-2827399.jpeg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '10:00 AM', description: 'Free time for shopping in the souks' },
                        { time: '12:00 PM', description: 'Visit to the Bahia Palace and Saadian Tombs' },
                        { time: '02:00 PM', description: 'Lunch at a riad' },
                        { time: '04:00 PM', description: 'Relax at a traditional hammam and spa' },
                        { time: '08:00 PM', description: 'Fantasia dinner show with horseback performances' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
             
            ]
        },
        {
            id: 4,
            title: 'Agadir',
            datedepart: 'June 15',
            datefin: 'June 20',
            time: '5 nights and 4 days',
            description: 'Relaxation on the beaches of Agadir with water sports included.',
            price: 4800,
            villedepart: 'Marrakech',
            image: 'assets/images/agadir-4834349_1920.jpg',
            stars: '⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch by the beach' },
                        { time: '03:00 PM', description: 'Relax at the hotel pool or beach' },
                        { time: '06:00 PM', description: 'Sunset walk along the Agadir promenade' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Boat excursion to observe dolphins' },
                        { time: '01:00 PM', description: 'Lunch on the boat' },
                        { time: '03:00 PM', description: 'Snorkeling or swimming in the bay' },
                        { time: '06:00 PM', description: 'Return to the hotel and free time' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Visit to the Agadir Souk and local markets' },
                        { time: '12:00 PM', description: 'Lunch at a seafood restaurant' },
                        { time: '02:00 PM', description: 'Visit to the Agadir Oufella ruins for panoramic views' },
                        { time: '04:00 PM', description: 'Free time for shopping or relaxing' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Marrakech' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 5,
            title: 'Essaouira',
            datedepart: 'July 1',
            datefin: 'July 5',
            time: '4 nights and 3 days',
            description: 'Cultural stay with visit to the medina and water sports.',
            price: 4000,
            villedepart: 'Casablanca',
            image: 'assets/images/morocco-1463212_1920.jpg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch at a fish restaurant' },
                        { time: '03:00 PM', description: 'Guided walk through the medina and artisan workshops' },
                        { time: '06:00 PM', description: 'Sunset at the Skala de la Ville' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Water sports (surfing or windsurfing)' },
                        { time: '01:00 PM', description: 'Lunch by the beach' },
                        { time: '03:00 PM', description: 'Visit to the Essaouira Citadel and Jewish Quarter' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Excursion to the nearby Diabat village and its dunes' },
                        { time: '12:00 PM', description: 'Lunch in Diabat' },
                        { time: '02:00 PM', description: 'Visit to the Argan oil cooperative' },
                        { time: '04:00 PM', description: 'Return to Essaouira and free time' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Casablanca' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 6,
            title: 'Fes',
            datedepart: 'August 10',
            datefin: 'August 15',
            time: '5 nights and 4 days',
            description: 'Discovery of the imperial city with cultural and gastronomic visits.',
            price: 5000,
            villedepart: 'Rabat',
            image: 'assets/images/morocco-4034924_1920.jpg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch at a traditional restaurant' },
                        { time: '03:00 PM', description: 'Guided tour of the Fes medina' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Visit to the Fes tanneries' },
                        { time: '01:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '03:00 PM', description: 'Visit to the Royal Palace' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Visit to the Bou Inania Madrasa' },
                        { time: '12:00 PM', description: 'Lunch at a riad' },
                        { time: '02:00 PM', description: 'Visit to the Mellah (Jewish Quarter)' },
                        { time: '04:00 PM', description: 'Free time for shopping or relaxing' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Rabat' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 7,
            title: 'Tangier',
            datedepart: 'September 20',
            datefin: 'September 25',
            time: '5 nights and 4 days',
            description: 'Stay in Tangier with visit to the Hercules Cave and seaside walk.',
            price: 4500,
            villedepart: 'Casablanca',
            image: 'assets/images/pexels-photo-11517335.jpeg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch at a fish restaurant' },
                        { time: '03:00 PM', description: 'Guided walk through the Tangier medina' },
                        { time: '06:00 PM', description: 'Sunset at the Tangier corniche' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Visit to the Hercules Cave' },
                        { time: '01:00 PM', description: 'Lunch by the sea' },
                        { time: '03:00 PM', description: 'Visit to Cape Spartel' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Visit to the American Legation Museum' },
                        { time: '12:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '02:00 PM', description: 'Free time for shopping or relaxing' },
                        { time: '06:00 PM', description: 'Dinner at a traditional restaurant' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Casablanca' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 8,
            title: 'Ouarzazate',
            datedepart: 'October 5',
            datefin: 'October 10',
            time: '5 nights and 4 days',
            description: 'Discovery of desert landscapes and film studios.',
            price: 5200,
            villedepart: 'Marrakech',
            image: 'assets/images/pexels-photo-3581916.jpeg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '03:00 PM', description: 'Visit to the Atlas Film Studios' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Excursion to Aït Benhaddou kasbah' },
                        { time: '01:00 PM', description: 'Lunch in a Berber village' },
                        { time: '03:00 PM', description: 'Explore the kasbah and its surroundings' },
                        { time: '06:00 PM', description: 'Return to Ouarzazate and free time' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Visit to the Taourirt Kasbah' },
                        { time: '12:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '02:00 PM', description: 'Visit to the Fint Oasis' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Marrakech' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 9,
            title: 'Ifrane',
            datedepart: 'November 15',
            datefin: 'November 20',
            time: '5 nights and 4 days',
            description: 'Stay in the "Little Switzerland of Morocco" with outdoor activities.',
            price: 4700,
            villedepart: 'Fes',
            image: 'assets/images/free-photo-of-serene-winter-scene-in-ifrane-morocco.jpeg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '03:00 PM', description: 'Guided walk through Ifrane city center' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: 'Hike in Ifrane National Park' },
                        { time: '01:00 PM', description: 'Picnic lunch in nature' },
                        { time: '03:00 PM', description: 'Visit to the Lion Stone sculpture' },
                        { time: '06:00 PM', description: 'Return to the hotel and free time' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Visit to Ifrane Lake' },
                        { time: '12:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '02:00 PM', description: 'Visit to the Al Akhawayn University campus' },
                        { time: '06:00 PM', description: 'Free time to explore the city' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Fes' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                }
            ]
        },
        {
            id: 10,
            title: 'Dakhla',
            datedepart: 'December 1',
            datefin: 'December 6',
            time: '5 nights and 4 days',
            description: 'Adventure in the Dakhla desert with water sports and 4x4 rides.',
            price: 6000,
            villedepart: 'Casablanca',
            image: 'assets/images/free-photo-of-kitesurfing-adventure-in-dakhla-s-scenic-lagoon.jpeg',
            stars: '⭐⭐⭐⭐',
            programmes: [
                {
                    day: 'Day 1',
                    schedule: [
                        { time: '10:00 AM', description: 'Arrival and check-in at the hotel' },
                        { time: '12:00 PM', description: 'Welcome drink and orientation' },
                        { time: '01:00 PM', description: 'Lunch at a local restaurant' },
                        { time: '03:00 PM', description: 'Relax at the hotel or explore the city' },
                        { time: '06:00 PM', description: 'Sunset walk along the Dakhla lagoon' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 2',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast' },
                        { time: '11:00 AM', description: '4x4 excursion in the desert' },
                        { time: '01:00 PM', description: 'Lunch in the desert' },
                        { time: '03:00 PM', description: 'Sandboarding on the dunes' },
                        { time: '06:00 PM', description: 'Return to the hotel and free time' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (1).jpg',
                },
                {
                    day: 'Day 3',
                    schedule: [
                        { time: '10:00 AM', description: 'Water sports (kitesurfing or windsurfing)' },
                        { time: '12:00 PM', description: 'Lunch by the lagoon' },
                        { time: '02:00 PM', description: 'Visit to the White Dune' },
                        { time: '06:00 PM', description: 'Free time to relax' }
                    ],
                    image: 'assets/images/wallpaperflare.com_wallpaper (3).jpg',
                },
                {
                    day: 'Day 4',
                    schedule: [
                        { time: '09:00 AM', description: 'Breakfast and check-out' },
                        { time: '11:00 AM', description: 'Departure to Casablanca' }
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
