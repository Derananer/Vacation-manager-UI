import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginComponent} from './login/login.component';
import {SingUpComponent} from './sing-up/sing-up.component';


const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singUp', component: SingUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
