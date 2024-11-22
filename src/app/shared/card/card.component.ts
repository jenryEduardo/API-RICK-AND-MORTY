import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() status: string = '';
  @Input() species: string = '';
  @Input() gender: string = '';

  comment: string = '';

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'status-alive';
      case 'dead':
        return 'status-dead';
      default:
        return 'status-unknown';
    }
  }

  handleCommentSubmit() {
    console.log(`Comentario enviado para ${this.name}: ${this.comment}`);
    this.comment = '';
  }
}
