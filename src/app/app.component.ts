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
}
