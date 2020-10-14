import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER= "http://localhost:3000/";

  constructor(private httpClient:HttpClient,public afAuth: AngularFireAuth, private router:Router) { }


    public getProduct(nameEndPoint: string){
      return this.httpClient.get(this.REST_API_SERVER+ nameEndPoint);
    }

  public logIn() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe(user => {
      if(user!=null){
        this.router.navigate(['/dashboard']);
        console.log(user.displayName);
      }
    });
  }

  public logOut() {
    this.afAuth.signOut();
    this.afAuth.authState.subscribe(user => {
      if(user==null){
        this.router.navigate(['/login']);
      }
    });
  }
}
