import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Home {
  h_id: string;
  city: string;
  price: string;
  rating: string;
  class: string;
}

@Component({
  selector: 'app-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  imports:[NgFor],
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  public hotels = [
    {
      id: 1,
      name: 'Grand Luxury Resort',
      price: 15000,
      location: 'Goa, India',
      image: './assets/Hotel1.jpg',
      description: 'A luxurious stay with beautiful ocean views and world-class amenities.',
    },
    {
      id: 2,
      name: 'Mountain View Inn',
      price: 8000,
      location: 'Manali, India',
      image: 'assets/Hotel2.jpg',
      description: 'Cozy rooms with stunning views of the mountains, perfect for a serene getaway.',
    },
    {
      id: 3,
      name: 'Urban Hotel Deluxe',
      price: 12000,
      location: 'Mumbai, India',
      image: 'assets/Hotel3.jpg',
      description: 'Modern hotel with excellent facilities in the heart of the city.',
    },
    {
      id: 4,
      name: 'Heritage Palace Stay',
      price: 20000,
      location: 'Jaipur, India',
      image: 'assets/Hotel4.jpg',
      description: 'Stay in a royal heritage palace with exceptional service and grand architecture.',
    },
    {
      id: 5,
      name: 'Lakeview Boutique',
      price: 7000,
      location: 'Udaipur, India',
      image: 'assets/Hotel5.jpg',
      description: 'Charming boutique hotel offering picturesque views of the lake and personalized service.',
    }
  ];
  
  homes: Home[] = [
    { h_id: "1", city: "Bangalore", price: "10000", rating: "4.65", class: "hotel1" },
    { h_id: "2", city: "Delhi", price: "6900", rating: "4.25", class: "hotel2" },
    { h_id: "3", city: "Bangalore", price: "10000", rating: "4.20", class: "hotel3" },
    { h_id: "4", city: "Kolkata", price: "20000", rating: "4.7", class: "hotel4" },
    { h_id: "5", city: "Delhi", price: "9000", rating: "4.23", class: "hotel5" },
    { h_id: "6", city: "Delhi", price: "6000", rating: "4.23", class: "hotel6" },
    { h_id: "7", city: "Kolkata", price: "9500", rating: "4.23", class: "hotel7" },
    { h_id: "8", city: "Bangalore", price: "12000", rating: "4.23", class: "hotel8" }
  ];
  x: number = 0;

  sortPrice(): void {
    this.homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  }

  sortRating(): void {
    this.homes.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
  }

  navigateToRoom(price: number): void {
    this.x = price;
    window.location.href = '../finalRoom/room.html';
  }

  filterByCity(city: string): void {
    this.homes.forEach(home => {
      const element = document.querySelector(`#${home.class}`) as HTMLElement;
      if (element) {
        if (home.city === city) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    });
  }

  bangalore(): void {
    this.filterByCity('Bangalore');
  }

  delhi(): void {
    this.filterByCity('Delhi');
  }

  kolkata(): void {
    this.filterByCity('Kolkata');
  }
}
