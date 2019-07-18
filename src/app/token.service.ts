import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token:string;
  tokenHeaderName:string = 'token';

  getTokenHeaderName():string{
  	return this.tokenHeaderName;
  }
  setToken(token:string):void{
  	this.token = token;
  }
  getToken():string{
  	return this.token;
  }

  constructor() { }
}
