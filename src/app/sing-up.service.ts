import { Injectable } from '@angular/core';
import { UserCreation } from './sing-up/userCreation';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  authorisationServiceURL = "http://localhost:8079/services/authorisation-service/";
  singUpURL = "sing-up";

  singUp(userCreation: UserCreation ):void{
  	this.http.post<any>(this.authorisationServiceURL + this.singUpURL, userCreation).subscribe();
  	window.alert("alert from service singUp");
  }

  constructor(private http: HttpClient) { }
}
