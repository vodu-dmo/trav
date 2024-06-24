// calendar.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  selectedDate: Date;

  constructor() {
    this.selectedDate = new Date(); 
  }

    dateSelected(event: CustomEvent<Date>) {
      if (event.detail !== undefined) {
        this.selectedDate = event.detail;
        console.log('Fecha seleccionada:', this.selectedDate);
    }
}
