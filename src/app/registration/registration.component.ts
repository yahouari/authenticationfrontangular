import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/user';
import { AuthenticationService } from 'src/services/authentication.service';
import { HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {InteractionService} from '../../services/interaction.service';
import {Voyage} from '../voyage';
import {SearchDeleteComponent} from  'src/app/search-delete/search-delete.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: AuthenticationService, private router: Router, private interactionService: InteractionService) {}


  user: User = new User(0, '', '', 0, '');
  message: any;
  login: string;
  mode; number = 0;
  destination: string;

  ngOnInit() {
    this.interactionService.currentlogin$.subscribe(login => { this.login = login }
        , err => {
          console.log(err);
        });
      console.log(this.interactionService.currentlogin$);
      console.log(this.login);
    this.interactionService.currentDestination$.subscribe(destination => { this.destination = destination }
      , err => {
        console.log(err);
      });

  }

  public registerNow() {
    console.log(this.login);
    this.user.ideval= Math.round(Math.random()*100);
    this.user.destination = this.destination;
    this.user.username= this.login;
    this.user.dateevaluation = '2020-05-02';
    console.log(this.user);
    const resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.user = data);
  }
}
