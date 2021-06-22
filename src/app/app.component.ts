import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = "angular";
  num1:number=10;
  num2:number=20;
  str:string="Hello";
  imgurl:string="assets/images/g1.jpg";
  inptvalue:string="John";
  url:string="http://www.google.com";
  gtitle:string="Google";
  num:number=8.345;
  d=new Date ;
  parentData:string ="AppComponent";
  

  color:any={
    shape:'circle',
    name:'red',
    id:234
  }
  msg(){
    return this.str;

  }

  display(){
    alert("Hello")
  }
  sum(a,b){
    alert(a+b);
  }

  // goBack(){
  //   let selectedId=this.departmentId?this.departmentId:null;
  //   this._route.navigate(['/deplist',{id:selectedId}]);
  // }
}
