import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = [];
  constructor(private serviceService: ServiceService, private _authServiceService: AuthServiceService, private _router: Router) {
    if (!this._authServiceService.isAuthenticated()) {
      _router.navigate(['login'])
    }
  }


  ngOnInit(): void {
  }

  showData() {
    this.serviceService.getProduct("products/").subscribe((data: any[]) => {
      this.dataSource = data;
    });
  }

  logOut() {
    this.serviceService.logOut();
  }

}
