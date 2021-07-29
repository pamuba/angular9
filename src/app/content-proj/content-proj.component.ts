import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-proj',
  templateUrl: './content-proj.component.html',
  styleUrls: ['./content-proj.component.css']
})
export class ContentProjComponent implements OnInit {

  public display = true;
  public details = [
    {"id":"1","content":"Angular"},
    {"id":"2","content":"React"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
