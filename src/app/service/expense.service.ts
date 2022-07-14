import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor( private http:HttpClient) { }
  addexpense(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addExpense`,model);
  }
  listexpsense(userid:any):Promise <any> {

    return this.http.get(`${environment.Base_URL}listexpense/${userid}`).toPromise();

  }
}
