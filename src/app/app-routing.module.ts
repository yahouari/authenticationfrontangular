import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TasksComponent} from './tasks/tasks.component';
import {NewTasksComponent} from './new-tasks/new-tasks.component';
import {RegisterationComponent} from './registeration/registeration.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {UserComponent} from './user/user.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'new-task',
    component: NewTasksComponent
  },
  {
    path: 'register',
    component: RegisterationComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'registera',
    component: UserComponent
  },
  {
    path: '',
    redirectTo: 'mainpage', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
