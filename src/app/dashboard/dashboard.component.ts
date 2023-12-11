import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private _router:Router){}

  logout(){
    //Remove The token and navigate to Login
    localStorage.removeItem("token");
    this._router.navigateByUrl("/login");
    
  }
  
  

}
