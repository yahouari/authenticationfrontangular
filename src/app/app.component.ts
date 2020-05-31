import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-springboot-client';
  constructor(private authService: AuthServiceService, private router: Router) {
  }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');

  }

  /*
   body {
  margin: 0;
  height: 100%;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  background-image: url("backgr.jpg");
  /* Center and scale the image nicely 
  background-position: center;
background - repeat: no - repeat;
background - size: cover;
background - attachment: fixed;
}*/
}
