import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCarouselComponent } from './features/dimension/card-carousel/card-carousel.component';

const routes: Routes = [
  { path: '', component: CardCarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
