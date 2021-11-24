import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';
  private addUpadteUrl = 'http://localhost:8080/api/v1/employee';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  addEmployee(emloyee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.addUpadteUrl}`, emloyee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.addUpadteUrl}/${id}`);
  }

  updateEmployee ( id: number, value: any ):Observable<any>
  {
    return this.httpClient.put(`${this.addUpadteUrl}/${id}`, value);
  }
}
