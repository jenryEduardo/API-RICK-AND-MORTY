import { Component } from '@angular/core';
import { RickAndMortyApiService } from '../services/rick-and-morty-api.service';
import { Model } from '../model/location';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {

constructor(private service : RickAndMortyApiService){}

data : Model[] = []

id: number = 1

ngOnInit(): void {
  this.onSubmit()
}

onSubmit(){
    this.service.getLocation().subscribe({
      next: (response) => {
        this.data.push(response);
        console.log('Datos obtenidos: ', this.data);
      },
      error: (error) => {
        console.error('Error al obtener la ubicación: ', error);
      }
    });
}

}
