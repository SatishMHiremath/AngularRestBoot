import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = "http://localhost:8080/api/customers";
  
  constructor(private http:HttpClient) { 
  }

  getCustomer(id: number): Observable<Object> {
    // return this.http.get(this.baseUrl+'/'+'{id}');
    return this.http.get("./assets/mydata.json");
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/'+'create',customer);
  }

  updateCustomer(id:number, value: any):Observable<Object> {
    return this.http.put(this.baseUrl+'/'+'{id}', value);
  } 

  deleteCustomer(id:number): Observable<any> {
    return this.http.delete(this.baseUrl+'/'+'{id}',{responseType:'text'});
  }

  custItems: any;

  getCustomerList(): Observable<any> {
    // return this.http.get(this.baseUrl);
         this.custItems = this.http.get("./assets/mydata.json").subscribe(data => console.log(data));
         console.log(this.custItems)
         return this.custItems;
  }

  getCustomerByAge(age:number): Observable<any> {
    return this.http.get(this.baseUrl+'/'+'age'+'/'+{age});
  }

  deleteAll() : Observable<any> {
    return this.http.delete(this.baseUrl+'/'+'delete',{responseType:'text'});
  } 
}
