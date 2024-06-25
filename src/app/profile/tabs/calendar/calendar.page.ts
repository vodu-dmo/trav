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

  dateSelected(event: CustomEvent) {
    // Aquí puedes manejar el evento
    console.log('Fecha seleccionada:', event.detail.value);
    this.selectedDate = event.detail.value; // Actualiza la fecha seleccionada
  }
}

