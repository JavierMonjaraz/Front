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
  user = JSON.parse(localStorage.getItem('user'));
  constructor(private http: HttpClient, private authServiceService:AuthServiceService) { }

  getUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.user['token']}`
      })
    }
    
    return this.http.get(`${this.api}api/v1/profile/profileModel_users`, httpOptions);
  }

  
  postUser(name:string, lastname:string, age:number, email:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.user['token']}`
      })
    }
    
    return this.http.post(`${this.api}api/v1/profile/profileModel_users`,{name,lastname,age,email}, httpOptions);
  }

  deleteUser(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.user['token']}`
      })
    }
    
    return this.http.delete(`${this.api}api/v1/profile/profileModel_user/${id}`, httpOptions);
  }

  getUser(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.user['token']}`
      })
    }
    
    return this.http.get(`${this.api}api/v1/profile/profileModel_user/${id}`, httpOptions);
  }

  putUser(ID:number,name:string, lastname:string, age:number, email:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.user['token']}`
      })
    }
    
    return this.http.put(`${this.api}api/v1/profile/profileModel_user/${ID}`,{name,lastname,age,email}, httpOptions);
  }
  

}
