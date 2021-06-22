import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';
@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.scss']
})
export class CustlistComponent implements OnInit {
  public Customer: any = [];
  constructor(private custS: CustService) { }


  ngOnInit(): void {
    // this.Customer=this.custS.getCustomer();
    this.custS.getCustomer().subscribe(data => this.Customer = data);
  }

}
