import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayName = true;

  color = "yellow";

  constructor() { }

  ngOnInit(): void {
  }

}
