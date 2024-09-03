import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Champion } from './champion/champion';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = '/api/champions';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  // **** Récupérer la liste des champions *** //
  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.apiUrl)
      .pipe(
        tap(() => console.log('fetched champions')),
        catchError(this.handleError<Champion[]>('getChampions', []))
      );
  }

  // **** Récupérer un champion depuis son id *** //
  getChampionById(id: number): Observable<Champion | undefined> {
    return this.getChampions().pipe(
      map(champions => champions.find(champion => champion.id === id))
    );
  }

  // **** Mettre à jour un champion *** //
  updateChampion(champion: Champion): Observable<any> {
    return this.http.put(this.apiUrl, champion, this.httpOptions).pipe(
      tap(_ => console.log(`updated champion id=${champion.id}`)),
      catchError(this.handleError<any>('updateChampion'))
    );
  }

  // **** Ajouter un champion à la liste des champions *** //
  addChampion(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(this.apiUrl, champion, this.httpOptions).pipe(
      tap((newChampion: Champion) => console.log(`added champion w/ id=${newChampion.id}`)),
      catchError(this.handleError<Champion>('addChampion'))
    );
  }

  // **** Récupérer la liste des ids des champions *** //
  getChampionIds(): Observable<number[]> {
    return this.getChampions().pipe(
      map(champions => champions.map(champion => champion.id))
    );
  }

  // **** Supprimer un champion de la liste des champions *** //
  deleteChampion(id: number): Observable<void> {
    const url = `${this.apiUrl}/champions/${id}`;
    return this.http.delete<void>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
