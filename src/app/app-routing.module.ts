import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'create-employee', component:CreateEmployeeComponent},
    {path:'employees', component:EmployeesComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
