import { Component, OnInit } from '@angular/core';
import{ UserService} from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  public User:any=[];
  page:number=1;
  constructor( private userS:UserService) { }

  ngOnInit(): void {
    this.userS.getUser().subscribe(data=>this.User=data);
  }

}
