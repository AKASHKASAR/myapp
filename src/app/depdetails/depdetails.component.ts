import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depdetails',
  templateUrl: './depdetails.component.html',
  styleUrls: ['./depdetails.component.scss']
})
export class DepdetailsComponent implements OnInit {

  public DepartmentId;
  public DepartmentName;
  public DepartmentVersion;
  public DepImg:string;
  constructor(private actRoute: ActivatedRoute, private _route:Router) { }

  ngOnInit(): void {
    // this.DepartmentId=this.actRoute.snapshot.params['id'];
    // this.DepartmentName=this.actRoute.snapshot.params['name'];
    // this.DepartmentVersion=this.actRoute.snapshot.params['version'];
    // this.DepartmentImg=this.actRoute.snapshot.params['img'];

    this.actRoute.params.subscribe((_params: Params) => {
      this.DepartmentId =parseInt(_params['id']);
      this.DepartmentName = _params['name'];
      this.DepartmentVersion =parseInt(_params['version']);
      this.DepImg = _params['img'];
    });
    /* Param Observable capable of detecting any chnge
      to route parameter back to component.
      Route service gives us acccess to all parameter 
      and that is going to return as param observable.
      we going to subscribe we get all the parameter,
      we need id parameter, we convert it into int and assign
      to deptid that is displayed in our view.
    */
  }

  gotoDep(){
    this._route.navigate(['/department',{id : this.DepartmentId}]);
  }
  

}
