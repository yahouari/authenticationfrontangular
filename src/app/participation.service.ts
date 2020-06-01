import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, concat, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { error, $ } from 'protractor';
import { Participation } from './Participation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseurl = 'https://blad-e.herokuapp.com/Enregistrer-Participation';
@Injectable({
  providedIn: 'root'
})


export class ParticipationService {

  voyage: any;

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  public getOnClicked(idVoyageur: string, destination: string, nombreDePersonnes: number) {
    return this.http.post('https://blad-e.herokuapp.com/Enregistrer-Participation',
      {
        mail: idVoyageur,
        destination: destination,
        nombreDePersonnes: nombreDePersonnes
      },
      httpOptions).pipe(catchError(this.handleError('getOnClicked', destination)));
  }
  

  public getDestination() {
    return this.http.get("https://blad-e.herokuapp.com/voyages");
  }
  public getParticipationList() {
    return this.http.get("https://blad-e.herokuapp.com/participations");
  }
  public deleteParticipation(id: number) {
    return this.http.delete("https://blad-e.herokuapp.com/participations/delete/" + id + "");
  }
}

