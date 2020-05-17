import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  mode:number=0;
  errorMessage:string;

  form = new  FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('',Validators.required),
    datenaiss: new FormControl('',Validators.required),
    lieunaiss: new FormControl('',Validators.required),
    tel: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required)


  });
  public currentUser: User;
  //private mode: number=1;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onRegister(user) {
    this.authService.register(user)
      .subscribe(data =>{
          this.user = data;
          this.mode =1;
        },
        err =>{
          this.errorMessage = err.error.message;
          this.mode =0;
        })
  }
}

