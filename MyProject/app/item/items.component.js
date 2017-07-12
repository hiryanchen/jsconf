"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation
    // to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s
    // main NgModule, defined in app.module.ts.
    function ItemsComponent(router, activatedRoute, itemService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.itemService = itemService;
        this.http = http;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.username = params["username"];
        });
        this.makeRemoteRequest();
    };
    Object.defineProperty(ItemsComponent.prototype, "items", {
        get: function () {
            return this.itemService.getItems();
        },
        enumerable: true,
        configurable: true
    });
    ItemsComponent.prototype.addVideo = function () {
        this.router.navigate(["add-item"]);
    };
    ItemsComponent.prototype.makeRemoteRequest = function () {
        var _this = this;
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://httpbin.org/post", JSON.stringify({
            id: 888,
            title: "Chromecast",
            description: "Home Entertainment"
        })).map(function (result) { return result.json(); })
            .do(function (result) { return console.log(JSON.stringify(result)); })
            .subscribe(function (result) {
            _this.itemService.addItem(result.json);
        }, function (error) {
            console.log(error);
        });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        item_service_1.ItemService,
        http_1.Http])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCxzQ0FBOEQ7QUFDOUQsbUJBQWdCO0FBR2hCLCtDQUE2QztBQU83QyxJQUFhLGNBQWM7SUFHdkIsMEVBQTBFO0lBQzFFLHFFQUFxRTtJQUNyRSx3RUFBd0U7SUFDeEUsMkNBQTJDO0lBQzNDLHdCQUNZLE1BQWMsRUFDZCxjQUE4QixFQUM5QixXQUF3QixFQUN4QixJQUFVO1FBSFYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUUzQixpQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzVDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFJLGlDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVNLDBDQUFpQixHQUF4QjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUcsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQ3BEO1lBQ0ksRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsWUFBWTtZQUNuQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBYixDQUFhLENBQUM7YUFDL0IsRUFBRSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUM7YUFDakQsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNSLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FTc0IsZUFBTTtRQUNFLHVCQUFjO1FBQ2pCLDBCQUFXO1FBQ2xCLFdBQUk7R0FYYixjQUFjLENBNEMxQjtBQTVDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL1J4XCJcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvblxuICAgIC8vIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzXG4gICAgLy8gbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBwYXJhbXNbXCJ1c2VybmFtZVwiXTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tYWtlUmVtb3RlUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpOkl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgYWRkVmlkZW8oKTogdm9pZCB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhZGQtaXRlbVwiXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFrZVJlbW90ZVJlcXVlc3QoKSB7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KTtcbiAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL2h0dHBiaW4ub3JnL3Bvc3RcIiwgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogODg4LFxuICAgICAgICAgICAgICB0aXRsZTogXCJDaHJvbWVjYXN0XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhvbWUgRW50ZXJ0YWlubWVudFwiXG4gICAgICAgICAgfSkpLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAuZG8ocmVzdWx0ID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtU2VydmljZS5hZGRJdGVtKHJlc3VsdC5qc29uKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==