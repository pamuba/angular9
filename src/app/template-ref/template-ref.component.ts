import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(val){
    console.log(val)
  }

}
