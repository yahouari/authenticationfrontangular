import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, concat, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { error, $ } from 'protractor';
import { Participation } from './Participation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseurl = 'http://localhost:9090/Enregistrer-Participation';
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
    return this.http.post('http://localhost:9090/Enregistrer-Participation',
      {
        mail: idVoyageur,
        destination: destination,
        nombreDePersonnes: nombreDePersonnes
      },
      httpOptions).pipe(catchError(this.handleError('getOnClicked', destination)));
  }
  

  public getDestination() {
    return this.http.get("http://localhost:9090/voyages");
  }
  public getParticipationList() {
    return this.http.get("http://localhost:9090/participations");
  }
  public deleteParticipation(id: number) {
    return this.http.delete("http://localhost:9090/participations/delete/" + id + "");
  }
}

