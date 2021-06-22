import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoArray:any=[];
  addTodo(value){
    if(value==""){
      alert("Please Fill This Required Field.")
    }
    else{
      this.todoArray.push(value);
    }
    
  }

  delete(todo){
    for(let i=0;i<=this.todoArray.length;i++){
      if(todo==this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
