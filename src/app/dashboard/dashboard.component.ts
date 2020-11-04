import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router'
import { UsersService } from '../service/Users/users.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'email'];
  dataSource = [];
  constructor(private userService : UsersService,private serviceService: ServiceService, private _authServiceService: AuthServiceService, private _router: Router) {
    if (!this._authServiceService.isAuthenticated()) {
      _router.navigate(['login'])
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }


  logOut() {
    this.serviceService.logOut();
  }

  getUsers(){
    this.userService.getUsers().subscribe((data: any[])=>{
      this.dataSource = data;
    })
  }

}
