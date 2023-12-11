import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  constructor(private _createEmployeeService:EmployeeService){}
  public CreateEmployeeForm:FormGroup= new FormGroup({
   name :new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
   gender: new FormControl(),
  //  male: new FormControl(null),
  //  female: new FormControl(),
   company : new FormControl(null, [Validators.required]),
   role:new FormControl(null, [Validators.required]),
   package: new FormControl(null,[Validators.required]),
   email:new FormControl( null, [Validators.required, Validators.email]),
   dob: new FormControl(null, [Validators.required]),
   address:new FormGroup({
    addressLine:new FormControl(null, [Validators.required]),
    city:new FormControl(null, [Validators.required]),
    state:new FormControl(null, [Validators.required]),
    pincode: new FormControl(null, [Validators.required, Validators.min(100000),Validators.max(999999)]),
   }),
    hikes: new FormArray([]),
    workMode: new FormControl(),
    travelBill: new FormControl(null, [Validators.required]),
    wifiBill: new FormControl(null, [Validators.required]), 
  });

  //Hikes Array  call
  get hikesFormArray(){
    return this.CreateEmployeeForm.get('hikes') as FormArray;

  }

  addHikes(){
  this.hikesFormArray.push(
    new FormGroup({
      year: new FormControl(null, [Validators.required]),
      percentage: new FormControl(null, [Validators.required]),
    })
  )
  }
  delete(i:number){
    this.hikesFormArray.removeAt(i);
  }
  submit(){
    console.log(this.CreateEmployeeForm);

    this._createEmployeeService.postCreteEmployee(this.CreateEmployeeForm.value).subscribe(
      (data:any)=>{
        alert("Employee Details Created Successfully");
        // this.CreateEmployeeForm='';
      },
      (err:any)=>{
        alert("Intenal server Error");
      }
    )
  }

}
