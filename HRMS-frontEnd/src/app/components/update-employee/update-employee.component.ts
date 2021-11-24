import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.error(error)
    );
  }
  updateEmployee() {
    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe((data) => {
        this.employee = new Employee();
        this.gotoList();
      });
  }
  onSubmit ()
  {
    this.updateEmployee();
  }
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
