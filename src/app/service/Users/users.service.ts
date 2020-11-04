import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api: String = 'https://back-web-193231-ids.herokuapp.com/';
  constructor(private http: HttpClient, private authServiceService:AuthServiceService) { }

  getUsers(): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${user['token']}`
      })
    }
    
    return this.http.get(`${this.api}api/v1/profile/profileModel_users`, httpOptions);
  }
}
