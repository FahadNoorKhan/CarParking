import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent{
  // name: string = fullname;
  constructor() { }
  // tslint:disable-next-line: new-parens
  carParkForm = new FormGroup
  ({
    fName: new FormControl(''),
    carNo: new FormControl(''),
    carCat: new FormControl(''),
    contactNo: new FormControl('')
  });

  // cars =
  // [
  //   {value: 'Sedan'},
  //   {value: 'SUV'},
  //   {value: 'Hatchback'},
  //   {value: 'Crossover'},
  //   {value: 'Convertible'}
  // ];
  // tslint:disable-next-line: typedef
  onSubmit()
  {
    console.log(this.carParkForm.value);

  }
}
