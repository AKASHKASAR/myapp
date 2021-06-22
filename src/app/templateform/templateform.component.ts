import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {
  fullname:string;
  emailid:string;
  street:any;
  addresscity:string;
  zip:number;
  info:any=[];
  

  onSubmit(value:any){
    alert("Your form submitted successfully")
    console.log(value);
    this.fullname=value.fname;
    this.emailid=value.email;
    this.street=value.street;
    this.addresscity=value.city;
    this.zip=value.zip;
    this.info.push(value);

  }

  delete(todo){
    for(let i=0;i<this.info.length;i++){
      if(todo==this.info[i]){
        this.info.splice(i,1);// 1st postion 2nd-how many elements to be removed
      }
    }
  }

  color:any={
    shape:'circle',
    name:'red'
  }

  city:string[]=['Pune','Mumbai','Nashik','Jaipur','Banglore','Nagpur'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
