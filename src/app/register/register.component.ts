import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup:FormGroup;
  hide:boolean=true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormGroup=this._formBuilder.group({
      username: ['',Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  signup(){
    
  }
}
