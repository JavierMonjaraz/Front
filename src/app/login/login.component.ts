import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  googleAuth() {
    this.serviceService.logIn();
  }

}
