import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks;
  constructor(public authService: AuthServiceService, private router: Router) { }

  ngOnInit() {/*
    this.authService.getTasks()
      .subscribe(data => {
        this.tasks = data;
      }, error => {
        this.authService.logout();
        this.router.navigateByUrl('/login');

      })*/
  }

  onNewTask() {
    this.router.navigateByUrl('/new-task');
  }

}
