"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var common_1 = require("@angular/common");
var camera = require("nativescript-camera");
var image_1 = require("ui/image");
var item_service_1 = require("./item.service");
var AddItemComponent = (function () {
    function AddItemComponent(router, activatedRoute, location, itemService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.itemService = itemService;
        this.storage = [];
    }
    AddItemComponent.prototype.ngOnInit = function () {
        // Default to []
        var items = ApplicationSettings.getString("items", "[]");
        this.storage = JSON.parse(items);
    };
    AddItemComponent.prototype.save = function () {
        // Not working
        // ApplicationSettings.clear();
        ApplicationSettings.remove("items");
        this.storage.push({
            "id": 1,
            "title": this.title,
            "description": this.description
        });
        ApplicationSettings.setString("items", JSON.stringify(this.storage));
        this.location.back();
    };
    AddItemComponent.prototype.capture = function () {
        var _this = this;
        camera.requestPermissions();
        camera.takePicture().then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new image_1.Image();
            image.src = imageAsset;
            _this.image = imageAsset;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    core_1.Component({
        selector: "ns-add-items",
        moduleId: module.id,
        templateUrl: "./add-item.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location,
        item_service_1.ItemService])
], AddItemComponent);
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwwREFBNEQ7QUFDNUQsMENBQTJDO0FBQzNDLDRDQUE4QztBQUU5QyxrQ0FBaUM7QUFJakMsK0NBQTZDO0FBTzdDLElBQWEsZ0JBQWdCO0lBTTNCLDBCQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixRQUFrQixFQUNsQixXQUF3QjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFOMUIsWUFBTyxHQUFlLEVBQUUsQ0FBQztJQU1LLENBQUM7SUFFdkMsbUNBQVEsR0FBUjtRQUNFLGdCQUFnQjtRQUNoQixJQUFNLEtBQUssR0FBTyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLGNBQWM7UUFDZCwrQkFBK0I7UUFDL0IsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ25CLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDLENBQUE7UUFDRixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sa0NBQU8sR0FBZDtRQUFBLGlCQVVDO1FBVEMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksS0FBSyxHQUFTLElBQUksYUFBSyxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQVFrQixlQUFNO1FBQ0UsdUJBQWM7UUFDcEIsaUJBQVE7UUFDTCwwQkFBVztHQVZ2QixnQkFBZ0IsQ0EwQzVCO0FBMUNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFkZC1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtaXRlbS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U6IEltYWdlQXNzZXQ7XG4gIHByaXZhdGUgc3RvcmFnZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIERlZmF1bHQgdG8gW11cbiAgICBjb25zdCBpdGVtczphbnkgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcIml0ZW1zXCIsIFwiW11cIik7XG4gICAgdGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIC8vIE5vdCB3b3JraW5nXG4gICAgLy8gQXBwbGljYXRpb25TZXR0aW5ncy5jbGVhcigpO1xuICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiaXRlbXNcIik7XG4gICAgdGhpcy5zdG9yYWdlLnB1c2goe1xuICAgICAgXCJpZFwiOiAxLFxuICAgICAgXCJ0aXRsZVwiOiB0aGlzLnRpdGxlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfSlcbiAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcIml0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmFnZSkpO1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICB9XG5cbiAgcHVibGljIGNhcHR1cmUoKSB7XG4gICAgY2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgIGNhbWVyYS50YWtlUGljdHVyZSgpLnRoZW4oKGltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgaXMgYW4gaW1hZ2UgYXNzZXQgaW5zdGFuY2VcIik7XG4gICAgICAgIGxldCBpbWFnZTpJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZUFzc2V0O1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2VBc3NldDtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==