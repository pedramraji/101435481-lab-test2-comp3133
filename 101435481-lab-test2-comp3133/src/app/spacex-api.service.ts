import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMissionByYear(year: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?launch_year=${year}`);
  }

  getMissionDetails(flightNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${flightNumber}`);
  }
}