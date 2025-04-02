import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../spacex-api.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission?: Mission;

  constructor(private route: ActivatedRoute, private spacexService: SpacexApiService) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id');
    if (flightNumber) {
      this.spacexService.getMissionDetails(flightNumber).subscribe(data => {
        this.mission = data;
      });
    }
  }
}