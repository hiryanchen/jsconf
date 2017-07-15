"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("tns-core-modules/application");
var Platform = require("platform");
var Application = require("application");
var jsSHA = require("jssha");
var SignInComponent = (function () {
    function SignInComponent(router) {
        this.router = router;
        this.appPlatform = "mobile";
        this.forgot = false;
        this.appPlatform = (app.android ? "Android" : (app.ios ? "IOS" : "mobile"));
    }
    SignInComponent.prototype.hashPassword = function (password) {
        var shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.update(password);
        return shaObj.getHash("HEX");
    };
    SignInComponent.prototype.signIn = function () {
        var hash = this.hashPassword(this.password);
        var navigationExtras = {
            queryParams: {
                "username": this.username,
                "password": hash
            }
        };
        if (hash == "93f8bb0eb2c659b85694486c41717eaf0fe23cd4") {
            this.router.navigate(["items"], navigationExtras);
        }
        else {
            this.forgot = true;
        }
    };
    SignInComponent.prototype.getApplicationVersion = function () {
        if (Platform.isAndroid) {
            var PackageManager = android.content.pm.PackageManager;
            var pkg = Application.android.context.getPackageManager().getPackageInfo(Application.android.context.getPackageName(), PackageManager.GET_META_DATA);
            return java.lang.Integer.toString(pkg.versionCode);
        }
        else {
            var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
            return version;
        }
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        selector: "signin",
        moduleId: module.id,
        templateUrl: "./signin.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQTJEO0FBRTNELGtEQUFvRDtBQUNwRCxtQ0FBcUM7QUFDckMseUNBQTJDO0FBRTNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQVcvQixJQUFhLGVBQWU7SUFNMUIseUJBQW9CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBTGpDLGdCQUFXLEdBQVUsUUFBUSxDQUFDO1FBRzlCLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLFFBQWU7UUFDMUIsSUFBSSxNQUFNLEdBQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxJQUFNLElBQUksR0FBVSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLGdCQUFnQixHQUFxQjtZQUN2QyxXQUFXLEVBQUU7Z0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN6QixVQUFVLEVBQUUsSUFBSTthQUNqQjtTQUNGLENBQUE7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksMENBQTBDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELCtDQUFxQixHQUFyQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN2RCxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsQ0FDdEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQzVDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUMxRCw0QkFBNEIsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkMsQ0FBQztxQ0FPMkIsZUFBTTtHQU50QixlQUFlLENBNEMzQjtBQTVDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgUGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuY29uc3QganNTSEEgPSByZXF1aXJlKFwianNzaGFcIik7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcbmRlY2xhcmUgdmFyIGphdmE6IGFueTtcbmRlY2xhcmUgdmFyIE5TQnVuZGxlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzaWduaW5cIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9zaWduaW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xuICBhcHBQbGF0Zm9ybTpzdHJpbmcgPSBcIm1vYmlsZVwiO1xuICB1c2VybmFtZTpzdHJpbmc7XG4gIHBhc3N3b3JkOnN0cmluZztcbiAgZm9yZ290OmJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICB0aGlzLmFwcFBsYXRmb3JtID0gKGFwcC5hbmRyb2lkID8gXCJBbmRyb2lkXCIgOiAoYXBwLmlvcyA/IFwiSU9TXCIgOiBcIm1vYmlsZVwiKSk7XG4gIH1cblxuICBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6c3RyaW5nKTpzdHJpbmcge1xuICAgIGxldCBzaGFPYmo6YW55ID0gbmV3IGpzU0hBKFwiU0hBLTFcIiwgXCJURVhUXCIpO1xuICAgIHNoYU9iai51cGRhdGUocGFzc3dvcmQpO1xuICAgIHJldHVybiBzaGFPYmouZ2V0SGFzaChcIkhFWFwiKTtcbiAgfVxuXG4gIHNpZ25JbigpIHtcbiAgICBjb25zdCBoYXNoOnN0cmluZyA9IHRoaXMuaGFzaFBhc3N3b3JkKHRoaXMucGFzc3dvcmQpO1xuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICBcInBhc3N3b3JkXCI6IGhhc2hcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc2ggPT0gXCI5M2Y4YmIwZWIyYzY1OWI4NTY5NDQ4NmM0MTcxN2VhZjBmZTIzY2Q0XCIpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIml0ZW1zXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3Jnb3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldEFwcGxpY2F0aW9uVmVyc2lvbigpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNBbmRyb2lkKSB7XG4gICAgICBsZXQgUGFja2FnZU1hbmFnZXIgPSBhbmRyb2lkLmNvbnRlbnQucG0uUGFja2FnZU1hbmFnZXI7XG4gICAgICBsZXQgcGtnID0gQXBwbGljYXRpb24uYW5kcm9pZC5jb250ZXh0LmdldFBhY2thZ2VNYW5hZ2VyKCkuZ2V0UGFja2FnZUluZm8oXG4gICAgICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQuY29udGV4dC5nZXRQYWNrYWdlTmFtZSgpLFxuICAgICAgICBQYWNrYWdlTWFuYWdlci5HRVRfTUVUQV9EQVRBKTtcbiAgICAgIHJldHVybiBqYXZhLmxhbmcuSW50ZWdlci50b1N0cmluZyhwa2cudmVyc2lvbkNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmVyc2lvbiA9IE5TQnVuZGxlLm1haW5CdW5kbGUub2JqZWN0Rm9ySW5mb0RpY3Rpb25hcnlLZXkoXG4gICAgICAgIFwiQ0ZCdW5kbGVTaG9ydFZlcnNpb25TdHJpbmdcIik7XG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==