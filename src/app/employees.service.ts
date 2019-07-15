import { Injectable } from '@angular/core';
import { Employee } from './employees/employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

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
  addEmployeeURL = "add-employee";
  removeEmployeeURL = "";

  standardHeaders = new HttpHeaders({
    'department': this.department, 
    'Content-Type':  'application/json',
    'Authorization': this.tokenService.getToken()
  });

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeServiceURL + this.employeesURL, {"headers": this.standardHeaders});
  }

  addEmpoloyee(employee: Employee):Observable<Employee>{
  	return this.http.post<Employee>(this.employeeServiceURL + this.removeEmployeeURL, employee, {"headers" : this.standardHeaders});
  }

  /*deleteEmployee():Observable<>{

  }*/

 constructor(private http: HttpClient, private tokenService: TokenService) { }
}
