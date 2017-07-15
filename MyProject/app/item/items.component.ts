import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx"

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    username: string;

    // This pattern makes use of Angular’s dependency injection implementation
    // to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s
    // main NgModule, defined in app.module.ts.
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService,
        private http: Http) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.username = params["username"];
        })
        this.makeRemoteRequest();
    }

    get items():Item[] {
        return this.itemService.getItems();
    }

    addMedia(): void {
      this.router.navigate(["add-item"])
    }

    public makeRemoteRequest() {
      let headers = new Headers({"Content-Type" : "application/json"});
      let options = new RequestOptions({ headers: headers });
      this.http.post("http://httpbin.org/post", JSON.stringify(
          {
              id: 888,
              title: "Chromecast",
              description: "Home Entertainment"
          })).map(result => result.json())
          .do(result => console.log(JSON.stringify(result)))
          .subscribe(result => {
              this.itemService.addItem(result.json);
          }, error => {
              console.log(error);
          })
    }
}
