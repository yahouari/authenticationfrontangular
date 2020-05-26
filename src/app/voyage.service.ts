import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Voyage } from './voyage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiURL = 'http://localhost:9090/Voyages';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {


  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
 
  public getVoyagesList() {
    return this.http.get("http://localhost:9090/voyages");
  }


  getVoyage(id: number): Observable<Voyage> {
    const url = '${apiURL}/${id}';
    return this.http.get<Voyage>(url, httpOptions).pipe(
      tap(_ => console.log('fetched voyages id=${id}')),
      catchError(this.handleError<Voyage>('getVoyage id=${id}'))
    );
  }
}
