import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  baseUrl= "http://localhost:52978";
  constructor(private http:HttpClient) { }

  get = (url)=>{
    const headers = new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Bearer "+localStorage.getItem("token")
    });
    return this.http.get(this.baseUrl+"/"+url);
  }
  post = (url,data)=>{
    const headers = new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Bearer "+localStorage.getItem("token")
    });
    return this.http.post(this.baseUrl+"/"+url,data,{headers : headers});
  }
  delete = (url,id)=>{
    const headers = new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Bearer "+localStorage.getItem("token")
    });
    return this.http.delete(this.baseUrl+"/"+url+"/"+id,{headers : headers})
  }
  put = (url,data) => {
    const headers = new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Bearer "+localStorage.getItem("token")
    });
    return  this.http.put(this.baseUrl+"/"+url,data,{headers : headers})
  }
  login = (url,UserName, Password) => {
    const headers = new HttpHeaders();
    headers.append("content-type","application/json");
    this.http.post(this.baseUrl + '/' + url, {UserName:UserName, Password:Password},{headers:headers})
  }
}
