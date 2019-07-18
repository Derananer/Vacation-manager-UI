import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
	
  authorisationServiceURL = "http://localhost:8079/services/authorisation-service/";
  singInURL = "login";

  singIn(userCredentials): Observable<HttpResponse<any>>{
  	let token: string;
  	return this.http.post<any>(this.authorisationServiceURL + this.singInURL,userCredentials, {observe: 'response'})
  }

  constructor(private tokenService: TokenService, private http: HttpClient) { }
}