import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ Customer} from './customer';
import{ Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private _http:HttpClient) { }
  public url="assets/apidata/customer.json";

  getCustomer():Observable<Customer[]>{
    //return this._http.get(this.url)
    return this._http.get<Customer[]>(this.url);
  }
}

