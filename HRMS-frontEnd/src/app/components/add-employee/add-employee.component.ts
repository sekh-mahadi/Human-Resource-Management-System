import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveEmployee() {
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.error(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"]);
  }

  onSubmit ()
  {
    this.saveEmployee();
  }
}
