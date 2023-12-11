import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  public employees:any=[];

  // Empty string Variable for filteration 
  public term:string='';

  //Variables for sorting
  public sortColumn:string= '';
  public  sortOrder: string= '';
    
  //Variable for Pagination
  public pageno:number=0;

  //get method  call to get all emlpoyees data
  constructor(private _employeeService:EmployeeService){
    _employeeService.getEmployee().subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  //Delete Method call from the server
  delete(id:string){
    this._employeeService.deleteEmployees(id).subscribe(
      (data:any)=>{
        alert("Employee details deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  //Filtering method call 
  getfiltered(){
    this._employeeService.getFiltereEmployee(this.term).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  //Sorting Method call 
  sorting(){
    this._employeeService.getSortedEmployees(this.sortColumn, this.sortOrder).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Inrternal Server error")
      }
    )
  }

  // Pagination method call
  pagination(){
    this._employeeService.getPaginationofEmployess(this.pageno).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
