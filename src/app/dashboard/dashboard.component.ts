import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router'
import { UsersService } from '../service/Users/users.service'
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component'
import { MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'email', 'delete', 'Update'];
  dataSource = [];
  constructor(private userService: UsersService, private serviceService: ServiceService, private _authServiceService: AuthServiceService, private _router: Router, private dialog: MatDialog) {
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

  getUsers() {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.dataSource = data;
    })
  }

  delete(ID: number) {
    this.userService.deleteUser(ID).subscribe((respuesta:[])=>{
      if(respuesta==null){
        this.getUsers();
      }
    })
  }

  update(ID: number) {

  }

  agregar(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent);

    dialogRef.afterClosed().subscribe(data=>{
      if(data!=null){
        this.userService.postUser(data.name,data.lastname,data.age,data.email).subscribe((respuesta:[])=>{
          if(respuesta!=null){
            this.getUsers();
          }
        })
      }
    })
  }

}
