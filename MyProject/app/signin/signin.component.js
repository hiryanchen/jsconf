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
        this.appPlatform = (app.android ? "Android" : (app.ios ? "IOS" : "mobile"));
    }
    SignInComponent.prototype.signIn = function () {
        var shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.update(this.password);
        var navigationExtras = {
            queryParams: {
                "username": this.username,
                "password": shaObj.getHash("HEX")
            }
        };
        this.router.navigate(["items"], navigationExtras);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlEO0FBRXpELGtEQUFvRDtBQUNwRCxtQ0FBcUM7QUFDckMseUNBQTJDO0FBRTNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQVcvQixJQUFhLGVBQWU7SUFLMUIseUJBQW9CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBSmpDLGdCQUFXLEdBQVUsUUFBUSxDQUFDO1FBSzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxJQUFJLE1BQU0sR0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFO2dCQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDekIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ2xDO1NBQ0YsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsK0NBQXFCLEdBQXJCO1FBQ0UsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ3ZELElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsY0FBYyxDQUN0RSxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFDNUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQzFELDRCQUE0QixDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUN2QyxDQUFDO3FDQU0yQixlQUFNO0dBTHRCLGVBQWUsQ0FrQzNCO0FBbENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgUGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuY29uc3QganNTSEEgPSByZXF1aXJlKFwianNzaGFcIik7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcbmRlY2xhcmUgdmFyIGphdmE6IGFueTtcbmRlY2xhcmUgdmFyIE5TQnVuZGxlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzaWduaW5cIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9zaWduaW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xuICBhcHBQbGF0Zm9ybTpzdHJpbmcgPSBcIm1vYmlsZVwiO1xuICB1c2VybmFtZTpzdHJpbmc7XG4gIHBhc3N3b3JkOnN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICB0aGlzLmFwcFBsYXRmb3JtID0gKGFwcC5hbmRyb2lkID8gXCJBbmRyb2lkXCIgOiAoYXBwLmlvcyA/IFwiSU9TXCIgOiBcIm1vYmlsZVwiKSk7XG4gIH1cblxuICBzaWduSW4oKSB7XG4gICAgbGV0IHNoYU9iajphbnkgPSBuZXcganNTSEEoXCJTSEEtMVwiLCBcIlRFWFRcIik7XG4gICAgc2hhT2JqLnVwZGF0ZSh0aGlzLnBhc3N3b3JkKTtcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgXCJwYXNzd29yZFwiOiBzaGFPYmouZ2V0SGFzaChcIkhFWFwiKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJpdGVtc1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuICBnZXRBcHBsaWNhdGlvblZlcnNpb24oKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQW5kcm9pZCkge1xuICAgICAgbGV0IFBhY2thZ2VNYW5hZ2VyID0gYW5kcm9pZC5jb250ZW50LnBtLlBhY2thZ2VNYW5hZ2VyO1xuICAgICAgbGV0IHBrZyA9IEFwcGxpY2F0aW9uLmFuZHJvaWQuY29udGV4dC5nZXRQYWNrYWdlTWFuYWdlcigpLmdldFBhY2thZ2VJbmZvKFxuICAgICAgICBBcHBsaWNhdGlvbi5hbmRyb2lkLmNvbnRleHQuZ2V0UGFja2FnZU5hbWUoKSxcbiAgICAgICAgUGFja2FnZU1hbmFnZXIuR0VUX01FVEFfREFUQSk7XG4gICAgICByZXR1cm4gamF2YS5sYW5nLkludGVnZXIudG9TdHJpbmcocGtnLnZlcnNpb25Db2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZlcnNpb24gPSBOU0J1bmRsZS5tYWluQnVuZGxlLm9iamVjdEZvckluZm9EaWN0aW9uYXJ5S2V5KFxuICAgICAgICBcIkNGQnVuZGxlU2hvcnRWZXJzaW9uU3RyaW5nXCIpO1xuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfVxuICB9XG59XG4iXX0=