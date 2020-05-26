import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Participation } from '../Participation';
import { ParticipationService } from '../participation.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'
import { InteractionService } from '../interaction.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
} 

declare var paypal;

@Component({
  selector: 'app-enregistrer-participation',
  templateUrl: './enregistrer-participation.component.html',
  styleUrls: ['./enregistrer-participation.component.css']
})
export class EnregistrerParticipationComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  public payPalConfig?: IPayPalConfig;
  public voyages: any;
  destination: string;
  prix: number;
  selectedValue: string;


  mode: number = 0;
  ParticipationForm: FormGroup;
  idDestination: number = null;
  login: string;
  nombreDePersonnes: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  showSuccess: boolean;
  paidFor = false;
  totalPrice: number = (this.nombreDePersonnes * this.prix)/10;
  participation: any;
  constructor(private participationService: ParticipationService,
    private router: Router, private formBuilder: FormBuilder, private deservice: ParticipationService, private _interactionService: InteractionService) { }

  ngOnInit(): void {

    this._interactionService.currentlogin$.subscribe(login => { this.login = login }
      , err => {
        console.log(err);
      });
    this._interactionService.currentDestination$.subscribe(destination => { this.destination = destination }
      , err => {
        console.log(err);
      });
    this._interactionService.currentPrix$.subscribe(prix => { this.prix = parseInt(prix) }
      , err => {
        console.log(err);
      });
    this.ParticipationForm = this.formBuilder.group({

      

      nombreDePersonnes: [null, Validators.required]

    });

  }
  OnCl() {
    this.deservice.getOnClicked(this.login, this.destination, this.ParticipationForm.get('nombreDePersonnes').value).subscribe(data => {
      this.participation = data;
      this.mode = 1;
    }, err => {
      console.log(err);
    })
  }
  
  onGetDestination() {
    this.deservice.getDestination().subscribe(data => {
      this.voyages = data;
    }, err => {
      console.log(err);
    })
  }




  onFormSubmit() {
    paypal.Buttons(
      {
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {

                amount: {
                  currency_code: 'USD',
                  value: '900'
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);


  }
}
/*
  newParticipation(): void {
    this.submitted = false;
    this.participation = new Participation();
  }


this.isLoadingResults = true;
    this.participationService.addParticipation(this.ParticipationForm.value).subscribe((res: any) => {
      const idParticipation = res.idParticipation;
      this.isLoadingResults = false;
      this.router.navigate(['/Enregistrer-Participation', idParticipation]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    }

    );



  save() {

    this.participationService.enregistrerparticipation(this.participation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.participation = new Participation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Enregistrer-Participation']);
  }
}
*/


