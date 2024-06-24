// calendar.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  selectedDate: string; // Declarar selectedDate como string para manejar la fecha
  
  constructor() {
    this.selectedDate = new Date().toISOString(); // Inicializar con la fecha actual
  }

  dateSelected(event: CustomEvent) {
    const selectedDate = new Date(event.detail.value); // Obtener la fecha seleccionada del evento
    this.selectedDate = selectedDate.toISOString(); // Convertir la fecha a ISO string
    console.log('Selected Date:', this.selectedDate);
  }
}
