import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../spacex-api.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexApiService) { }

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }
}