import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../services/rick-and-morty-api.service';
import { Model } from '../model/location';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  data: Model[] = [];

  constructor(private service: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.fetchLocations();
  }

  // Llama al servicio para obtener todas las locaciones
  fetchLocations() {
    this.service.getAllLocations().subscribe({
      next: (locations) => {
        this.data = locations;
        console.log('Todas las locaciones obtenidas:', this.data);
      },
      error: (error) => {
        console.error('Error al obtener las locaciones:', error);
      },
    });
  }
}
