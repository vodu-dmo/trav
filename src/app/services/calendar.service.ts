// calendar.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private calendarCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.calendarCollection = this.afs.collection<any>('calendars');
  }

  // Crear un evento en el calendario
  createEvent(eventData: any): Promise<void> {
    const id = this.afs.createId();
    return this.calendarCollection.doc(id).set(eventData);
  }

  // Obtener todos los eventos del calendario
  getEvents(): Observable<any[]> {
    return this.calendarCollection.valueChanges({ idField: 'eventId' });
  }

  // Actualizar un evento en el calendario
  updateEvent(eventId: string, eventData: any): Promise<void> {
    return this.calendarCollection.doc(eventId).update(eventData);
  }

  // Eliminar un evento del calendario
  deleteEvent(eventId: string): Promise<void> {
    return this.calendarCollection.doc(eventId).delete();
  }
}
