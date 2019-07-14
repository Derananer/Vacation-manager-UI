import { Injectable } from '@angular/core';
import { Group } from './groups/group';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  //here we have to create http request for emplIDs then embed empls to group
  getGroups():Observable<>{
  	return
  }

  constructor() { }
}
