import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyErrorStateMatcher } from '../enregistrer-participation/enregistrer-participation.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User {
  public id: number;
  public nom: string;
  public prenom: string;
  public datenaiss: number;
  public lieunaiss: string;
  public username: string;
  public tel: string;

  matcher = new MyErrorStateMatcher();

}
