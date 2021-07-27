import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-binding',
  template: `
  <div class="container">
    <h3>Child Component</h3>
    <h4 class="text-success">HELLO WORLD</h4>
    <h4 [class]="successClass">HELLO WORLD</h4>
    <h4 class="text-special" [class]="successClass">HELLO WORLD</h4>
    <h4 [class.text-danger]="hasError">HELLO WORLD</h4>
    <h4 [ngClass]="messageClasses">HELLO WORLD</h4>
  </div>
  `,
  styles: [
    `
        .text-success {
          color:green
        }
        .text-danger{
          color:red
        }
        .text-special{
          font-style:italic
        }
    `
  ]
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success"
  public isSpecial = false
  public hasError = true;
 
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":!this.isSpecial
  }


  constructor() { }

  ngOnInit(): void {
  }

}
