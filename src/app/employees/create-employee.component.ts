import { Employee } from '../models/employee.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { Department } from '../models/department.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', {static:false} ) public createEmployeeForm: NgForm;
 // previewPhoto = false;
  employee: Employee;
  panelTitle: string;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  constructor(private _employeeService: EmployeeService,
    private _router: Router, private _route: ActivatedRoute){}
  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }
  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null
      };
      // Resetting the form, resets any previous validation errors
      this.createEmployeeForm.reset();
      this.panelTitle = 'Create Employee';
    } else {
      this.employee = Object.assign({}, this._employeeService.getEmployee(id).subscribe(
      (employee) => { this.employee = employee; },
      (err: any) => console.log(err)));
      this.panelTitle = 'Edit Employee';
    }
  }
  saveEmployee(empForm: NgForm): void {
    if (this.employee.id == null) {
      console.log(this.employee);
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          empForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          empForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }
      );
    }
  }



}
