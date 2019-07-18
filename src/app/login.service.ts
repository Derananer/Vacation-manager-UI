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

  singIn(userCredentials): string{
  	let token: string;
  	this.http.post<any>(this.authorisationServiceURL + this.singInURL,userCredentials, {observe: 'response'})
  	.subscribe(response => this.tokenService.setToken(response.headers.get(this.tokenService.getTokenHeaderName())));
  	return this.tokenService.getToken();
  }

  constructor(private tokenService: TokenService, private http: HttpClient) { }
}