// calendar.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  selectedDate: Date = new Date(); 
  constructor() { }

  dateSelected(event: Date) {
    console.log('Fecha seleccionada:', event);
    // lógica para manejar la fecha seleccionada

}
