import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []

  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees()
                    .subscribe(data => this.employees = data);
  }

}
