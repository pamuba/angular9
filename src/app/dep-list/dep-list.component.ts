import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.css']
})
export class DepListComponent implements OnInit {

  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"React "},
    {"id":3, "name":"Vue JS"},
    {"id":4, "name":"Ruby "},
    {"id":5, "name":"MongoDB"},
    {"id":6, "name":"Jasmine"}
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(dep){
    this.router.navigate(['/departments', dep.id])
  }

}
