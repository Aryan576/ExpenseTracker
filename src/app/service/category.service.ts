import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http:HttpClient) { }
  addCategory(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addCategory`,model);
  }
  listCategory():Promise<any>{
   return this.http.get(`${environment.Base_URL}ListCategory`).toPromise();
  }

}
