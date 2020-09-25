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
  info = "no hay nada";
  nameButton: String = "Mostrar";
  status = false;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {

  }

  sendService() {
    this.serviceService.getProduct("products/").subscribe((data: any[]) => {
      console.log(data),
        this.products = data;
    });
  }

  clean() {
    this.products = [];
  }

  showHide() {
    this.status = !this.status
    if (this.status) {
      this.nameButton = "Ocultar";
    } else {
      this.nameButton = "Mostrar"
    }
  }
}
