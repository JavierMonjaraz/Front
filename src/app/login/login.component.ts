import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private serviceService: ServiceService, private _formBuilder: FormBuilder, private _authServiceService: AuthServiceService, private _router: Router) {
    if (_authServiceService.isAuthenticated()) {
      _router.navigate(['dashboard'])
    }
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  googleAuth() {
    this.serviceService.logIn();
  }

  login(): void {
    const data = this.loginFormGroup.value;

    if (data.username && data.password) {
      this._authServiceService.login(data.username, data.password).subscribe(access => {
        localStorage.setItem('user', JSON.stringify(access));
        this._router.navigate(['dashboard']);
        /* Console.log(access) */
      }, error => {
        console.log("Datos invalidos")
      })
    }
  }

}
