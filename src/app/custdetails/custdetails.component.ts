import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.component.html',
  styleUrls: ['./custdetails.component.scss']
})
export class CustdetailsComponent implements OnInit {
  public Customer:any=[];
  constructor(private custS:CustService) { }

  ngOnInit(): void {
    this.Customer=this.custS.getCustomer();
    
  }

}
