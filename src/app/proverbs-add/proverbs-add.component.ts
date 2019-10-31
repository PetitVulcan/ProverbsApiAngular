import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-proverbs-add",
  templateUrl: "./proverbs-add.component.html",
  styleUrls: ["./proverbs-add.component.css"]
})
export class ProverbsAddComponent implements OnInit {
  Saying: any;
  Author: any;
  Language: any;
  id: undefined;
  constructor(private api: ApiService, private router: Router,private route : ActivatedRoute) {}

  ngOnInit() {
    if(this.route.snapshot.params.proverbId != undefined)
    {
      this.api.get('proverb/'+this.route.snapshot.params.proverbId).subscribe((res:any) =>{
        this.id=res.id;
        this.Saying=res.saying;
        this.Author=res.author;
        this.Language=res.language;
      })
    }
  }

  Add = () => {
    const proverb = {
      Saying: this.Saying,
      Author: this.Author,
      Language: this.Language
    };
    if (this.id == undefined) {
      this.api.post("proverb", proverb).subscribe((res: any) => {
        if (!res.error) {
          alert(res.message + "" + res.proverbId);
          this.router.navigate(["/"]);
        } else {
          alert(res.message);
        }
      });
    } else {
      this.api.put("proverb/" + this.id, proverb).subscribe((res: any) => {
          alert(res.message);
          if (!res.error) 
          this.router.navigate(["/list"]);
        });
    }
  }
}
