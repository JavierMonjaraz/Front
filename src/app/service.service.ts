import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER= "http://localhost:3000/";

  constructor(private httpClient:HttpClient) { }

  public getProduct(nameEndPoint: string){
    return this.httpClient.get(this.REST_API_SERVER+ nameEndPoint);
  }
  
}
