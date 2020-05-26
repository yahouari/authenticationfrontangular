import { Observable } from 'rxjs';
import { VoyageService } from '../voyage.service';
import { Voyage } from '../voyage';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { EventEmitter } from 'events';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.css']
})
export class VoyageListComponent implements OnInit {
  public backgroundImg: SafeStyle;
  public voyages: any;
  
  
  @Output() notify = new EventEmitter();

  constructor(private voyageService: VoyageService,
    private router: Router, private sanitizer: DomSanitizer, private _interactionService: InteractionService) { }

  ngOnInit() {
    this.voyageService.getVoyagesList().subscribe(data => {
      this.voyages = data;
    }, err => {
      console.log(err);
    })
  }

  OnClicked(destination: string, prix: string) {
    this._interactionService.changeDestination(destination);
    this._interactionService.changePrix(prix)
  }
   

  voyageDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
