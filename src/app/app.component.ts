import { Component } from '@angular/core';
import { CardData } from './/card.model.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardsData: CardData[] = [
    { imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male' },
    { imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', name: 'Morty Smith', status: 'Alive', species: 'Human', gender: 'Male' },
  ];
}
