import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI} from './user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = "http://jsonplaceholder.typicode.com/todos";

  constructor(private _http: HttpClient) { }

  getUser():Observable<UserI[]>{
    return this._http.get<UserI[]>(this.url);
  }



}







