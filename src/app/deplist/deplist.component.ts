import { Component, OnInit } from '@angular/core';
import { DepService } from '../dep.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { __param } from 'tslib';

@Component({
  selector: 'app-deplist',
  templateUrl: './deplist.component.html',
  styleUrls: ['./deplist.component.scss']
})
export class DeplistComponent implements OnInit {
public department:any=[];
public selectedId:number;
  constructor(private depS:DepService,private _route:Router, private _activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.depS.getDepartment().subscribe(data=>this.department=data);
    this._activeRoute.params.subscribe((_params : Params)=>{
      this.selectedId = parseInt(_params['id']);
    });
  }
  onSelect(d){
    this._route.navigate(['/depdetails',d.id,d.name,d.version,d.img],
    {queryParams:filter,skipLocationChange:true});
  }

  isSelected(d){
    return d.id==this.selectedId;
  }

}
