import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FpasswordComponent } from './fpassword/fpassword.component';

const routes: Routes = [
    {path:"",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"forgot-password",component:FpasswordComponent},
    {path:"**",component:RegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
