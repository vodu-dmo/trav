import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss']
})
export class CalendarPage {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'An event',
      color: { primary: '#e3bc08', secondary: '#FDF1BA' }
    }
  ];
}
