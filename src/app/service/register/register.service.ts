import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  api: String = 'http://web-javier.ddns.net/';
  constructor(private http: HttpClient) { }

  signup(username: String, email: String, password1: String, password2: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(`${this.api}api/v1/sign_up/signup`, { username, email, password1, password2 }, httpOptions);
  }
}