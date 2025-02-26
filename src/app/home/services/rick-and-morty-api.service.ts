import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Model } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApiService {
  private readonly BASE_URL = 'https://rickandmortyapi.com/api/location';

  constructor(private httpClient: HttpClient) {}

  // Función para obtener todas las locaciones iterando por páginas
  getAllLocations(): Observable<Model[]> {
    return this.httpClient.get<{ info: { pages: number }; results: Model[] }>(this.BASE_URL).pipe(
      switchMap((response) => {
        const totalPages = response.info.pages; // Número total de páginas
        const requests: Observable<{ results: Model[] }>[] = [];

        // Generamos una solicitud para cada página
        for (let page = 1; page <= totalPages; page++) {
          requests.push(this.httpClient.get<{ results: Model[] }>(`${this.BASE_URL}?page=${page}`));
        }

        // Ejecutamos todas las solicitudes y combinamos los resultados
        return forkJoin(requests).pipe(
          map((responses) =>
            responses.flatMap((response) => response.results.map(({ name, type, dimension }) => ({ name, type, dimension })))
          )
        );
      })
    );
  }
}
