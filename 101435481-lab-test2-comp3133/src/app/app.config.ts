import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MissionListComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

// Define routes
const routes: Routes = [
  { path: '', component: MissionListComponent },
  { path: 'mission/:id', component: MissionDetailsComponent },
];

// Application configuration
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Provide the router with the routes
    provideHttpClient(withFetch()),  // Provide the HTTP client
    provideAnimations(),  // Provide animations support
    importProvidersFrom(MatCardModule, MatFormFieldModule, MatInputModule),  // Import necessary modules
  ],
};
