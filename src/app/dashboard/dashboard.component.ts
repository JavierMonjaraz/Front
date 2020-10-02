import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.serviceService.logOut();
  }

}
