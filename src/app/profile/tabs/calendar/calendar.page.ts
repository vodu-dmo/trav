// calendar.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  selectedDate: Date = new Date(2024, 5, 24); // 24 de junio de 2024
  ;
  constructor() { }

}
