import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegisterService } from '../service/register/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;
  hidePassword1: boolean = true;
  hidePassword2: boolean = true;

  constructor(private _formBuilder: FormBuilder, private _RegisterRegister: RegisterService) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.registerFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', Validators.required],
    }, {
      validators: this.validarPassword
    });
  }

  validarPassword: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get('password1')
    const confirmarPassword = control.get('password2')
  
    return password.value === confirmarPassword.value
      ? null
      : { noSonIguales: true }
  }

  checkPassword(): boolean {
    return this.registerFormGroup.hasError('noSonIguales') &&
      this.registerFormGroup.get('password1').dirty &&
      this.registerFormGroup.get('password2').dirty;
  }

  signup() {
    const data = this.registerFormGroup.value
    this._RegisterRegister.signup(data.username,data.email,data.password1,data.password2).subscribe(Response=>{
      this.registerFormGroup.reset();
    }, error => {
      console.log(error.error)
    })
  }
}
