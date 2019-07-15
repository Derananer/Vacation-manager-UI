import { Injectable } from '@angular/core';
import { Group } from './groups/group';
import { Observable, of } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  
  getGroups():Observable<Group[]>{
    //here we have to create http request for emplIDs then embed empls to group	
  	
  	return ;
  }


  constructor(private tokenService: TokenService) { }
}
