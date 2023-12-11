import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="https://6572df5d192318b7db412dfe.mockapi.io/employees";
  constructor( private _httpClient:HttpClient) { }

  //Posting the Data/Empolyee Details in API
  postCreteEmployee(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"/",data)
  }

  //Geting the data form API
  getEmployee():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  //Deleting Employees data from API

  deleteEmployees(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }
  

  //Get Method to filter the Employees data from the API
  getFiltereEmployee(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  // Method to Sort the Employees data from tha API
  getSortedEmployees(sortColumn:string, sortOrder:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+sortColumn+"&order="+sortOrder);
  }

  //Method to get the Pagination of employees data from  the API

  getPaginationofEmployess(page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+page);
  }
}
