// calendar.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  selectedDate: Date = new Date(); // Inicializar con una fecha por defecto

  constructor() {}

  dateSelected(event: Date) {
    this.selectedDate = event;
    console.log('Selected Date:', this.selectedDate);
  }
}
