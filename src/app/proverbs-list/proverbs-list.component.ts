import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-proverbs-list",
  templateUrl: "./proverbs-list.component.html",
  styleUrls: ["./proverbs-list.component.css"]
})
export class ProverbsListComponent implements OnInit {
  proverbs: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.get("proverb").subscribe(res => {
      this.proverbs = res;
    });
  }
  Delete = proverbId => {
    this.api.delete("proverb", proverbId).subscribe((res: any) => {
      if (!res.error) {
        alert(res.message);
        this.api.get("proverb").subscribe(res => {
          this.proverbs = res;
        });
      } else {
        alert(res.message);
      }
    });
  }
}
