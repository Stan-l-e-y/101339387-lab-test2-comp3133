import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
})
export class MissionfilterComponent {
  year: number = 2023;
  @Output() filterByYear: EventEmitter<number> = new EventEmitter<number>();

  applyFilter() {
    this.filterByYear.emit(this.year);
  }
}
