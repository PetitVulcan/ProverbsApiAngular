import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proverb-daily',
  templateUrl: './proverb-daily.component.html',
  styleUrls: ['./proverb-daily.component.css']
})
export class ProverbDailyComponent implements OnInit {
  proverbs: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {    
    this.api.get("proverb/daily").subscribe(res => {
      this.proverbs = res;
    });
    console.log(this.proverbs);
  }

}
