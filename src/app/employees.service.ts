import { Injectable } from '@angular/core';
import { Employee } from './employees/employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

	//here we need list of emps
	//(we can create list that would update after ever action)
  department = "";
  employeeServiceURL = "http://localhost:8079/services/employee-service/";
  employeesURL = "employees";
  employeeURL = "employee";
  addEmployeeURL = "add-employeeURL";

  standratHeaders = new HttpHeaders({
    'department': this.department, 
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  });

  getEmployees():Observable<Employee[]>{
    this.http.get<Employee[]>(this.employeeServiceURL + this.employeesURL, {"headers": this.standratHeaders});
  	return ;
  }
  addEmpoloyee():Observable<Employee>{

  	return;
  }

  /*deleteEmployee():Observable<>{

  }*/

 constructor(private http: HttpClient) { }
}
