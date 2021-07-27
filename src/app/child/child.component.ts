import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <div class="container">
    <h3>Child Component</h3>
    <h2>WELCOME: {{name}}</h2>
    <input id="myId" type="text" value="Angular">
    <br>
    <input [id]="myId" type="text" value="Angular">
    <br>
    <input id="{{myId}}" type="text" value="Angular">
    <br>
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Angular">
  </div>
  `,
  styles: [`

  `]
})
export class ChildComponent implements OnInit {

  public isDisabled = false

  public name = "WILL SMITH"

  public myId = "testID"

  constructor() { }

  ngOnInit(): void {
  }

}
