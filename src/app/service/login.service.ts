import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../interface/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  users:UserLogin={userid:0,name:"",email:"",password:"",gender:"",createdDate:"",updatedDate:""}

  constructor( private http:HttpClient) { }
  login(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}Login`,model);
  }
}
