import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiURL = 'https://blad-e.herokuapp.com/Voyages';

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
    return this.http.get("https://blad-e.herokuapp.com/voyages");
  }


  
}
