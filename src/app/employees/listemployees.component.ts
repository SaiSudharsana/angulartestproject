import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  employees: Employee[];
  //employeeToDisplay: Employee;
  //private arrayIndex=1;
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    //this.employeeToDisplay = this.employees[0];
  }
  /*nextEmployee(): void{
         if(this.arrayIndex<=2)
          {
          this.employeeToDisplay=this.employees[this.arrayIndex];
          this.arrayIndex++;
          }
          else  {
          this.employeeToDisplay = this.employees[0];
          this.arrayIndex = 1;
          }
  }*/
   onClick(employeeId: number) {
         this._router.navigate(['/employees', employeeId]); //link parameters array
   }
}
