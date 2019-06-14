import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public codArea: string ;
  constructor() { }

  ngOnInit() {
    this.codArea = '+01';
  }


  procesaPropagar(cod) {
    this.codArea = cod;
    console.log(cod);
  }

}
