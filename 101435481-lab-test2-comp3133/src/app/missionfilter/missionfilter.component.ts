import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent {
  @Output() filterYear = new EventEmitter<string>();

  onYearChange(event: any) {
    this.filterYear.emit(event.target.value);
  }
}