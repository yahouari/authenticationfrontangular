import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FavorisServiceService {

  favoris: any;
  

  constructor(private http: HttpClient) {
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  public getOnClicked(destination: string, login: string) {
    return this.http.post('http://localhost:9090/favoris',
      {
        destination: destination,
        mail: login,
        nom_favoris: destination
      },
      httpOptions).pipe(catchError(this.handleError('getOnClicked', destination)));
  }
  public getFavoris() {
    return this.http.get('http://localhost:9090/favoriss');
  }
  public getFavorisList(login: string) {
    let params = new HttpParams();
    params = params.append('mail', login);
    return this.http.get('http://localhost:9090/favoris', { params: params });
  }
  public deleteFavoris(id: number) {
    return this.http.delete("http://localhost:9090/favoris/delete/" + id + "");
  }
 
}
