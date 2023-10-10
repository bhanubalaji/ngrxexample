import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  logindata(userName:any, password:any){
    console.log(userName,password)
    return this.http.post('http://localhost:4000/api/loginexample',{userName, password},{observe:'response'})
  }


}
