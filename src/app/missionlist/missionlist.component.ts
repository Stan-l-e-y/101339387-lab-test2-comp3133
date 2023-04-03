import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Mission {
  mission_name: string;
  launch_year: string;
  details: string;
  mission_patch_small: string;
  links: { mission_patch_small: string };
}

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  year: string = '';
  selectedMission: any;

  constructor(private http: HttpClient, private router: Router) {}

  onMissionSelected(mission: any) {
    this.selectedMission = mission;
    this.router.navigate(['/mission', mission.flight_number]);
  }

  ngOnInit(): void {
    this.http
      .get<Mission[]>('https://api.spacexdata.com/v3/launches')
      .subscribe((data) => {
        this.missions = data;
        this.filteredMissions = data;
      });
  }
  onFilterByYear(year: number) {
    this.http
      .get<Mission[]>(
        `https://api.spacexdata.com/v3/launches?launch_year=${year}`
      )
      .subscribe((data) => {
        this.filteredMissions = data;
      });
  }
}
