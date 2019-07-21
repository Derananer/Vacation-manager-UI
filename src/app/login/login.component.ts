import { Component, OnInit } from '@angular/core';
import { UserCredentials } from './userCredentials';
import { LoginService } from '../login.service';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials = {
    username: "",
    password: ""
  };

  

  singIn(userCredentials: UserCredentials):void{
  	  //here http request
  	  this.loginService.singIn(userCredentials).subscribe(response => {
      this.tokenService.setToken(response.headers.get(this.tokenService.getTokenHeaderName()));
      this.tokenService.setDepartmentId(response.headers.get(this.tokenService.getDepartmentIdHeaderName()));
      //route to main page
    });
  }

  ngOnInit() {
  }

  constructor(private loginService: LoginService, private tokenService: TokenService) { }

}
