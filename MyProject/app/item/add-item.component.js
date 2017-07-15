"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var common_1 = require("@angular/common");
var camera = require("nativescript-camera");
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
            "description": this.description,
            "image": this.imageString
        };
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
        var cameraOpts = {};
        cameraOpts.height = 180;
        cameraOpts.width = 180;
        cameraOpts.keepAspectRatio = true;
        camera.takePicture(cameraOpts).then(function (imageAsset) {
            _this.image = imageAsset;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwwREFBNEQ7QUFDNUQsMENBQTJDO0FBRTNDLDRDQUE4QztBQU05QywrQ0FBNkM7QUFXN0MsSUFBYSxnQkFBZ0I7SUFPM0IsMEJBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFFBQWtCLEVBQ2xCLFdBQXdCO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU4xQixVQUFLLEdBQWUsRUFBRSxDQUFDO0lBTU8sQ0FBQztJQUV2QyxtQ0FBUSxHQUFSO1FBQ0UsZ0JBQWdCO1FBQ2hCLElBQU0sS0FBSyxHQUFPLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0UsSUFBTSxPQUFPLEdBQVE7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLEVBQUcsSUFBSSxDQUFDLEtBQUs7WUFDcEIsYUFBYSxFQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2hDLE9BQU8sRUFBRyxJQUFJLENBQUMsV0FBVztTQUMzQixDQUFDO1FBRUYsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuRSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEQsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLGtDQUFPLEdBQWQ7UUFBQSxpQkFRQztRQVBDLElBQU0sVUFBVSxHQUF3QixFQUFFLENBQUM7UUFDM0MsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdkIsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFxQjtZQUN4RCxLQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQVNrQixlQUFNO1FBQ0UsdUJBQWM7UUFDcEIsaUJBQVE7UUFDTCwwQkFBVztHQVh2QixnQkFBZ0IsQ0ErQzVCO0FBL0NZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUFzc2V0IH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIFBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hZGQtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWRkLWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQWRkSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlOiBJbWFnZUFzc2V0O1xuICBpbWFnZVN0cmluZzogc3RyaW5nO1xuICBwcml2YXRlIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gRGVmYXVsdCB0byBbXVxuICAgIGNvbnN0IGl0ZW1zOmFueSA9IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiaXRlbXNcIiwgXCJbXVwiKTtcbiAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0l0ZW06SXRlbSA9IHtcbiAgICAgIFwiaWRcIjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLFxuICAgICAgXCJ0aXRsZVwiIDogdGhpcy50aXRsZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBcImltYWdlXCIgOiB0aGlzLmltYWdlU3RyaW5nXG4gICAgfTtcblxuICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiaXRlbXNcIik7XG4gICAgdGhpcy5pdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiaXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpO1xuXG4gICAgLy8gU2F2ZSBpbnRvIGRhdGFiYXNlIGluc3RlYWQ6XG4gICAgdGhpcy5pdGVtU2VydmljZS5nZXRTdG9yYWdlKCkuY3JlYXRlRG9jdW1lbnQobmV3SXRlbSk7XG5cbiAgICAvLyBOYXZpZ2F0ZSBiYWNrIHRvIHRoZSBwcmV2aW91cyB2aWV3LlxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICB9XG5cbiAgcHVibGljIGNhcHR1cmUoKSB7XG4gICAgY29uc3QgY2FtZXJhT3B0czpjYW1lcmEuQ2FtZXJhT3B0aW9ucyA9IHt9O1xuICAgIGNhbWVyYU9wdHMuaGVpZ2h0ID0gMTgwO1xuICAgIGNhbWVyYU9wdHMud2lkdGggPSAxODA7XG4gICAgY2FtZXJhT3B0cy5rZWVwQXNwZWN0UmF0aW8gPSB0cnVlO1xuICAgIGNhbWVyYS50YWtlUGljdHVyZShjYW1lcmFPcHRzKS50aGVuKChpbWFnZUFzc2V0OkltYWdlQXNzZXQpID0+IHtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgIH0pO1xuICB9XG59XG4iXX0=