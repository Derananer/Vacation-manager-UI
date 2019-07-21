import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  departmentId:string;
  token:string;
  departmentIdHeaderName:string = 'department';
  tokenHeaderName:string = 'Authorization';

  getTokenHeaderName():string{
  	return this.tokenHeaderName;
  }
  setToken(token:string):void{
  	this.token = token;
  }
  getToken():string{
  	return this.token;
  }
  getDepartmentIdHeaderName():string{
    return this.departmentIdHeaderName;
  }
  setDepartmentId(departmentId:string):void{
    this.departmentId = departmentId;
  }
  getDepartmentId():string{
    return this.departmentId;
  }

  constructor() { }
}
