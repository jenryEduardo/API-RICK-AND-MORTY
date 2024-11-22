import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DimensionModule } from './features/dimension/dimension.module'; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DimensionModule], 
  bootstrap: [AppComponent],
})
export class AppModule {}
