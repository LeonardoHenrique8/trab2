import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from './event/shared/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  TodosEvents: Observable<any>

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvent()
  }

  getEvent() {
    this.TodosEvents = this.eventsService.getAllEvents()
    console.log(this.TodosEvents)
  }

}
