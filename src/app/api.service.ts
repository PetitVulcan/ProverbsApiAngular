import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

  baseUrl= "http://localhost:52978";
  constructor(private http:HttpClient) { }

  get = (url)=>{
    return this.http.get(this.baseUrl+"/"+url);
  }
  post = (url,data)=>{
    return this.http.post(this.baseUrl+"/"+url,data);
  }
  delete = (url,id)=>{
    return this.http.delete(this.baseUrl+"/"+url+"/"+id)
  }
  put = (url,data) => {
    return  this.http.put(this.baseUrl+"/"+url,data)
  }
}
