import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Model } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {


  constructor(private httpClient: HttpClient) {}

  getLocation(): Observable<Model> {
    return this.httpClient.get<Model>(`https://rickandmortyapi.com/api/location/1`)
  }
}
