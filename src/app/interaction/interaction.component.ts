import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Data from Child");
  }

}
