import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  {path:'update-employee/:id', component: UpdateEmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
