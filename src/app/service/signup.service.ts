import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private http:HttpClient) { }
  saveusers(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}saveusers`,model);
  }
}
