import { Routes } from '@angular/router';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: 'mission/:id', component: MissionDetailsComponent }
];