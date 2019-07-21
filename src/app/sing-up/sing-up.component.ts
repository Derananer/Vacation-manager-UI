import { Component, OnInit } from '@angular/core';
import { SingUpService} from '../sing-up.service';
import { UserCreation } from './userCreation';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  userCreation : UserCreation = {
    firstName : "",
    lastName: '',
    secondName: '',
    depratmentName: '',
    email: '',
    username: '',
    password: ''
  };

  singUp():void{
  	this.singUpService.singUp(this.userCreation).subscribe(data => {window.alert("success")});//add error handling
  	//route to login page
    //add alert aboute successful registration
  }

  constructor(private singUpService: SingUpService) { }

  ngOnInit() {
  }

}
