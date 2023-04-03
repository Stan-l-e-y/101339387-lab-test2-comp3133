import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input() flight_number!: string;
  mission: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`https://api.spacexdata.com/v3/launches/${this.flight_number}`)
      .subscribe((data) => {
        this.mission = data;
      });
  }
}
