import { Component, Input } from '@angular/core';
import { CardData } from '..//..//../card.model.model';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent {
  @Input() cards: CardData[] = [];
  currentPage: number = 0;
  cardsPerPage: number = 6; 
  totalPages: number = Math.ceil(this.cards.length / this.cardsPerPage);

  handlePrevious() {
    this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
  }

  handleNext() {
    this.currentPage = (this.currentPage + 1) % this.totalPages;
  }

  get visibleCards() {
    return this.cards.slice(
      this.currentPage * this.cardsPerPage,
      (this.currentPage + 1) * this.cardsPerPage
    );
  }
}
