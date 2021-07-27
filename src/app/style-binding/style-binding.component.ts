import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'style-binding',
  template: `
  <div class="container">
    <h3>Child Component</h3>
    <h4 [style.color]="hasError ? 'red' : 'blue'">HELLO WORLD</h4>
    <h4 [style.color]="highlightColor">HELLO WORLD</h4>
    <h4 [ngStyle]="titleStyle">HELLO WORLD</h4>
  </div>
  `,
  styles: [
  ]
})
export class StyleBindingComponent implements OnInit {

  public hasError = false;

  public highlightColor = "orange";

  public titleStyle = {
    color:"gold",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
