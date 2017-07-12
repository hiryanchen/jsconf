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
        this.items = [];
    }
    AddItemComponent.prototype.ngOnInit = function () {
        // Default to []
        var items = ApplicationSettings.getString("items", "[]");
        this.items = JSON.parse(items);
    };
    AddItemComponent.prototype.save = function () {
        var newItem = {
            "id": Math.floor(Math.random() * 10000),
            "title": this.title,
            "description": this.description
        };
        // Not working: ApplicationSettings.clear();
        ApplicationSettings.remove("items");
        this.items.push(newItem);
        ApplicationSettings.setString("items", JSON.stringify(this.items));
        // Save into database instead:
        this.itemService.getStorage().createDocument(newItem);
        // Navigate back to the previous view.
        this.location.back();
    };
    AddItemComponent.prototype.capture = function () {
        var _this = this;
        // if (!camera.isAvailable()) {
        camera.requestPermissions();
        //}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwwREFBNEQ7QUFDNUQsMENBQTJDO0FBQzNDLDRDQUE4QztBQUU5QyxrQ0FBaUM7QUFJakMsK0NBQTZDO0FBTzdDLElBQWEsZ0JBQWdCO0lBTTNCLDBCQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixRQUFrQixFQUNsQixXQUF3QjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFOMUIsVUFBSyxHQUFlLEVBQUUsQ0FBQztJQU1PLENBQUM7SUFFdkMsbUNBQVEsR0FBUjtRQUNFLGdCQUFnQjtRQUNoQixJQUFNLEtBQUssR0FBTyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQU0sT0FBTyxHQUFRO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTyxFQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3BCLGFBQWEsRUFBRyxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDO1FBRUYsNENBQTRDO1FBQzVDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkUsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRELHNDQUFzQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxrQ0FBTyxHQUFkO1FBQUEsaUJBWUM7UUFYQywrQkFBK0I7UUFDN0IsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsR0FBRztRQUNILE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxJQUFJLEtBQUssR0FBUyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQztxQ0FRa0IsZUFBTTtRQUNFLHVCQUFjO1FBQ3BCLGlCQUFRO1FBQ0wsMEJBQVc7R0FWdkIsZ0JBQWdCLENBa0Q1QjtBQWxEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hZGQtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWRkLWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQWRkSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlOiBJbWFnZUFzc2V0O1xuICBwcml2YXRlIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gRGVmYXVsdCB0byBbXVxuICAgIGNvbnN0IGl0ZW1zOmFueSA9IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiaXRlbXNcIiwgXCJbXVwiKTtcbiAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0l0ZW06SXRlbSA9IHtcbiAgICAgIFwiaWRcIjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLFxuICAgICAgXCJ0aXRsZVwiIDogdGhpcy50aXRsZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IHRoaXMuZGVzY3JpcHRpb25cbiAgICB9O1xuXG4gICAgLy8gTm90IHdvcmtpbmc6IEFwcGxpY2F0aW9uU2V0dGluZ3MuY2xlYXIoKTtcbiAgICBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShcIml0ZW1zXCIpO1xuICAgIHRoaXMuaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcIml0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpKTtcblxuICAgIC8vIFNhdmUgaW50byBkYXRhYmFzZSBpbnN0ZWFkOlxuICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0U3RvcmFnZSgpLmNyZWF0ZURvY3VtZW50KG5ld0l0ZW0pO1xuXG4gICAgLy8gTmF2aWdhdGUgYmFjayB0byB0aGUgcHJldmlvdXMgdmlldy5cbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBjYXB0dXJlKCkge1xuICAgIC8vIGlmICghY2FtZXJhLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICAvL31cbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoKS50aGVuKChpbWFnZUFzc2V0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBhbiBpbWFnZSBhc3NldCBpbnN0YW5jZVwiKTtcbiAgICAgIGxldCBpbWFnZTpJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==