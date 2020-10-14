import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth/auth-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authServiceService: AuthServiceService, private _router: Router) {
    if (!this._authServiceService.isAuthenticated()) {
      _router.navigate(['login'])
    }
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('user')
    this._router.navigate(['/'])
  }

}
