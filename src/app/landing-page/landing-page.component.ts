import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

// Clase principal del componente de la lógica de negocios
export class LandingPageComponent implements OnInit {

  products = [];

  constructor( private serviceService : ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getProduct("products/").subscribe((data:any[])=>{
      console.log(data)
      this.products=data;
    });
  }
}
