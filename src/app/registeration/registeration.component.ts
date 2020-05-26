import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  user: any;
  mode: number = 0;
  errorMessage: string;
  constructor(private authService: AuthServiceService) { }


  ngOnInit() {
  }

  onRegister(user) {
    this.authService.register(user)
      .subscribe(data => {
        this.user = data;
        this.mode = 1;
      },
        err => {
          this.errorMessage = err.error.message;
          this.mode = 0;
        })
  }
}
