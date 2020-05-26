import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoyageurService } from '../voyageur.service';
import { AuthServiceService } from '../auth-service.service';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  mode: number = 0;
  username: string;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder, private _interactionService: InteractionService, private router: Router, private voyageurService: VoyageurService) { }

  ngOnInit(): void {
   
  }
  
  
  onLogin(user) {
    this.authService.login(user)
      .subscribe(resp => {
        let jwt = resp.headers.get('Authorization');
         console.log(resp.headers.get('Authorization'));
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('/tasks');
      },
        error => {
          this.mode = 1;
        });

  }
  OnClicked(event) {
   this._interactionService.changeLogin(event);
 
  }
}

  /*
  onSaveData() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = {
      mail: this.loginForm.controls.mail.value,
      motdepasse: this.loginForm.controls.motdepasse.value
    };
    this.voyageurService.login(loginData).subscribe((res) => {
      console.log(res);

    },
      err => { console.log(err); });
  }
}
/* this.message = data.message;
      if (data.token) {
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['view']);


      }
      else {
        this.invalidLogin = true;
        alert(data.message);
      }    */
