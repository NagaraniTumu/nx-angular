import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs/operators'

import { Ticket } from "@first-nx-app/data";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getTickets() {
    return this.http.get<Ticket[]>('/api/tickets')
      .pipe(map(response => {
        console.log('api respose', response);
        return response;
      }));
  }
}
