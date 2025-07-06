import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class HomePage implements OnInit {
  // Location data
  location = {
    city: 'Ahmedabad',
    state: 'Gujarat'
  };
  
  // Weather data
  weather = {
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 70,
    wind: 5,
    precipitation: 0
  };
  
  // Crops data
  crops = [
    { name: 'Tomato', status: 'best', image: 'assets/icon/tomato.png' },
    { name: 'Cabbage', status: 'best', image: 'assets/icon/cabbage.png' },
    { name: 'Cucumber', status: 'poor', image: 'assets/icon/cucumber.png' }
  ];
  
  // Tasks data
  tasks = [
    { 
      name: 'Irrigation Check', 
      date: '14 Feb, 2025', 
      duration: '2 Hrs',
      field: 'Wheat Field',
      image: 'assets/icon/irrigation.png'
    },
    { 
      name: 'Pesticide Apply', 
      date: '14 Feb, 2025', 
      duration: '1 Hrs',
      field: 'Wheat Field',
      image: 'assets/icon/pesticide.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
