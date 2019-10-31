import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName:any;
  Password:any;

  constructor(private api: ApiService,private http:HttpClient, private router : Router) { }

  ngOnInit() {
  }
  LogIn = () => {
    const headers = new HttpHeaders();
    headers.append("content-type","application/json");
    this.http.post('http://localhost:52978/login', {UserName:this.UserName, Password : this.Password},{headers : headers}).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem("token", res.token) 
      this.router.navigate(["/list"])
    },err => {
      console.log(err);
      alert('Error connection');
    })
  }
}
