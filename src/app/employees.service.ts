import { Injectable } from '@angular/core';
import { Employee } from './employees/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
	//here we need list of emps
	//(we can create list that would update after ever action)

  getEmployees():Observable<Employee[]>{
  	//here we http request
  	return ;
  }
  addEmpoloyee():Observable<Employee>{

  	return;
  }
  deletEmployee():Observable<>{

  }

  constructor() { }
}
