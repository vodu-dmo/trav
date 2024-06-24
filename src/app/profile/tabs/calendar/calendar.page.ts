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

  dateSelected(event: any) {
    const customEvent = event as CustomEvent;
    if (customEvent.detail && customEvent.detail.value) {
      console.log('Fecha seleccionada:', customEvent.detail.value);
    } else {
      console.log('El evento no contiene un detalle esperado.');
    }
  }
}
