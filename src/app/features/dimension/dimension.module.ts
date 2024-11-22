import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { SharedModule } from '../../shared/shared.module'; 

@NgModule({
  declarations: [CardCarouselComponent], 
  imports: [CommonModule, SharedModule], 
  exports: [CardCarouselComponent],      
})
export class DimensionModule {}
