import { Component, OnInit } from '@angular/core';
import { Ticket } from '@first-nx-app/data';
import { Observable } from 'rxjs';
import { TicketService } from './services/ticket.service';

@Component({
  selector: 'first-nx-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tuskdesk';
  public tickets$!: Observable<Ticket[]>;

  constructor(private ticketService: TicketService) { }

  public ngOnInit() {
    // this.ticketService.getTickets()
    //   .subscribe(response => {
    //     console.log('response in ts', response);
    //     this.tickets = response;
    //   });

    this.tickets$ = this.ticketService.getTickets();
     
  }
}
