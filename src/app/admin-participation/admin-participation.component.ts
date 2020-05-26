import { Component, OnInit } from '@angular/core';
import { ParticipationService } from '../participation.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin-participation',
  templateUrl: './admin-participation.component.html',
  styleUrls: ['./admin-participation.component.css']
})
export class AdminParticipationComponent implements OnInit {
  
  private sorted = false;
  participations: any;
  datasource = new MatTableDataSource;
  constructor(private participationService: ParticipationService) { }

  ngOnInit(): void {
    this.participationService.getParticipationList().subscribe(data => {
      this.participations = data;
    }, err => {
      console.log(err);
    })
  }

  OnClick(id: number) {
    this.participationService.deleteParticipation(id).subscribe(data => {
      this.participations = data;
    }, err => {
      console.log(err);
      })
    window.location.reload();
  }
}
