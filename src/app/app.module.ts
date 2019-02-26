import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";


import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

// create new module and import file ther --->



@NgModule({
  declarations: [
    AppComponent,    
    EmployeesComponent,
    EmployeeComponent,
    MaterialModule
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
