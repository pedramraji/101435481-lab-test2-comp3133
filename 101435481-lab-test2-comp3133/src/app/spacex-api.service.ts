import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private API_URL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.API_URL);
  }

  getMissionByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.API_URL}?launch_year=${year}`);
  }

  getMissionDetails(id: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.API_URL}/${id}`);
  }
}
