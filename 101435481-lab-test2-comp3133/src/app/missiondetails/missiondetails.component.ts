import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../spacex-api.service';
import { Mission } from '../models/mission';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';  
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  imports: [MatProgressSpinnerModule, MatCardModule, CommonModule] 
})
export class MissionDetailsComponent implements OnInit {
  mission!: Mission;
  isLoading = true;

  constructor(private route: ActivatedRoute, private spacexService: SpacexApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spacexService.getMissionDetails(id).subscribe(data => {
        this.mission = data;
        this.isLoading = false;
      }, error => {
        console.error('Error fetching mission details:', error);
        this.isLoading = false;
      });
    }
  }
}