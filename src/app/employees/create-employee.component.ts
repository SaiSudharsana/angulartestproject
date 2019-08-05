import { Employee } from '../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor(private _employeeService: EmployeeService,
    private _router: Router){}
  ngOnInit() {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
 togglePhotoPreview() {
  this.previewPhoto = !this.previewPhoto;
}


}
