import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeesService} from '../employees.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees: Employee[];
  
  getEmployees():void{
  	this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  addEmployee(employee:Employee):void{
    this.employeeService.addEmpoloyee(employee).subscribe(employee => this.employees.push(employee));
  }
  removeEmployee():void{
  }

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
  	this.getEmployees();
  }

}
