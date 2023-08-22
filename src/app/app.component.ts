import { Component, OnInit } from '@angular/core';
import { BusyService } from './core/services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Store Application';
  constructor(public busyServ:BusyService){}
  ngOnInit(): void {
  }
}
