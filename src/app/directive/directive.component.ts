import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  colors:string[]=['red','pink','yellow','green'];  
  color:string="pink";
  showDiv:boolean=true;

  num1=10;
  num2=20;

  constructor() { }

  ngOnInit(): void {
  }

}
