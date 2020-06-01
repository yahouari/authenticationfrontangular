import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoyageurService {
  private baseUrl ="https://blad-e.herokuapp.com/login"

  constructor(private http: HttpClient) { }
  login(loginData): Observable<VoyageurService> {
    return this.http.post<VoyageurService>(this.baseUrl, loginData);
  }
}
