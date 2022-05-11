import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

 readonly url="http://localhost:2245/";
  constructor(private http:HttpClient) { }

  addfac(data:any){
    return this.http.post(this.url+"Register",data);
  }
  getfac():Observable<any[]>{
    return this.http.get<any>(this.url+"users");
  }
}
