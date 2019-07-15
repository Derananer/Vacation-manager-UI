import { Component, OnInit } from '@angular/core';
import { UserCredentials } from './userCredentials';
import { LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  singIn(userCredentials):void{
  	//here http request
  }

  ngOnInit() {
  }

}
