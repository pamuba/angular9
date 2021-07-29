import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "pipes demos"

  public date = new Date()
  
  constructor() { }

  ngOnInit(): void {
  }

}
