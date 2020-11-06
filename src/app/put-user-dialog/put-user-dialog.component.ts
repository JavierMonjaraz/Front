import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-put-user-dialog',
  templateUrl: './put-user-dialog.component.html',
  styleUrls: ['./put-user-dialog.component.css']
})

export class PutUserDialogComponent implements OnInit {

  User: FormGroup;

  constructor(public dialogRef: MatDialogRef<PutUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: [], private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.User = this._formBuilder.group({
      name: [this.data['name'], Validators.required],
      lastname: [this.data['lastname'], Validators.required],
      age: [this.data['age'], Validators.required],
      email: [this.data['email'], Validators.required],
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
