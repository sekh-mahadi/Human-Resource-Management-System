import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private allEmployeeUrl = 'http://localhost:8080/api/v1/employees';
  private baseUrl = 'http://localhost:8080/api/v1/employee';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.allEmployeeUrl}`);
  }
  //create Employee REST API call
  addEmployee(emloyee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, emloyee);
  }
  //get employee REST API call
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
  //update employee REST API call
  updateEmployee(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
  //delete employee REST API call
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
}
