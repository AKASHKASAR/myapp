import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepService {

  constructor(private _http:HttpClient) { }
  public url="assets/apidata/department.json";

  getDepartment(){
    return this._http.get(this.url);
  }
}
