import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 // private baseUrl="https://reqres.in/api/login";

  constructor( private _httpClient:HttpClient) { }
  getlogin(data:any):Observable<any>{
    return this._httpClient.post("https://reqres.in/api/login",data)
  }
}
