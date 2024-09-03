import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Sort } from './sort';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private apiUrl = '/api/sorts';
  private  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSorts(): Observable<Sort[]>{
    return this.http.get<Sort[]>(this.apiUrl).pipe(
      tap(() => console.log('fetched sorts')),
      catchError(this.handleError<Sort[]>('getSorts', []))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
