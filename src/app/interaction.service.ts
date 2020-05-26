import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private destinationSource = new BehaviorSubject<string>("default");
  currentDestination$ = this.destinationSource.asObservable();
  private prixSource = new BehaviorSubject<string>("0");
  currentPrix$ = this.prixSource.asObservable();
  private loginSource = new BehaviorSubject<string>("default");
  currentlogin$ = this.loginSource.asObservable();
  constructor() { }
  
  changeLogin(login: string) {
    this.loginSource.next(login)
  }

  changeDestination(destination: string) {
    this.destinationSource.next(destination)
  }
  changePrix(prix: string) {
    this.prixSource.next(prix)
  }
}
