package io.mtech.HRMS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.mtech.HRMS.model.Employee;
import io.mtech.HRMS.service.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	//create Employee REST api
	@PostMapping("/employee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
}
