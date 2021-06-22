import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
public User:any=[];
page:number=1;
  constructor(private userS:UserService) { }

  ngOnInit(): void {
    
    this.userS.getUser().subscribe(data=>this.User=data);
  }

}
