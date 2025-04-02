import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SpacexApiService } from '../spacex-api.service';
import { Mission } from '../models/mission';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexApiService) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }
}
