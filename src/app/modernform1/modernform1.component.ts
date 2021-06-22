import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modernform1',
  templateUrl: './modernform1.component.html'
})
export class Modernform1Component implements OnInit {
  userForm=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{2,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
    address:new FormGroup({
      street:new FormControl(),
      city:new FormControl('',Validators.required),
      zip:new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9]{5}')])
    })
  });

data:any=[];

  city:string[]=['Pune','Mumbai','Nashik','Jaypur','Banglore','Nagpur'];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Data submitted successfully");
    console.log(this.userForm.value);
    this.data.push(this.userForm.value);
    this.userForm.reset();
  }
  delete(id){

    for(let i=0;i<this.data.length;i++){
      if(id==this.data[i]){
        this.data.splice(i,1);
      }
    }
    

    }
    update(info){
      this.userForm=new FormGroup({
        fname:new FormControl(info.fname),
        email:new FormControl(info.email),
        address:new FormGroup({
          street:new FormControl(info.address.street),
          city:new FormControl(info.address.city),
          zip:new FormControl(info.address.zip)
        })
      });
    
  }

}
