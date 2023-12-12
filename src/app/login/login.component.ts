import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  //Form group
  public loginform: FormGroup = new FormGroup ({
    email: new FormControl(),
    password:new FormControl(),
  });

  //Constuctor to create the variables to mapp the loginService
  constructor(private  _loginService:LoginService, private _router:Router){}

//Login button create login  
  login(){

     this._loginService.getlogin(this.loginform.value).subscribe(
      (data:any)=>{
        alert("Login successfull");
        //store
        localStorage.setItem("token",data.token);
        // Navigate to dashboard
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Invalid Credentials");
      }
     )
  }
}
