import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  selectedDate: Date;
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
    to: new Date(2030, 11, 31),
  };

  constructor() {
    this.selectedDate = new Date();
  }

  dateSelected(event: any) {
    console.log('Fecha seleccionada:', event);
    this.selectedDate = event;
  }
}
