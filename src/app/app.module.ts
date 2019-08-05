import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListemployeesComponent },
  {
    path: 'create',   component: CreateEmployeeComponent,
  canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
