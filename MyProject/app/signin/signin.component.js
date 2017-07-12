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
    SignInComponent.prototype.hashPassword = function (password) {
        var shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.update(password);
        return shaObj.getHash("HEX");
    };
    SignInComponent.prototype.signIn = function () {
        var navigationExtras = {
            queryParams: {
                "username": this.username,
                "password": this.hashPassword(this.password)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlEO0FBRXpELGtEQUFvRDtBQUNwRCxtQ0FBcUM7QUFDckMseUNBQTJDO0FBRTNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQVcvQixJQUFhLGVBQWU7SUFLMUIseUJBQW9CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBSmpDLGdCQUFXLEdBQVUsUUFBUSxDQUFDO1FBSzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxRQUFlO1FBQzFCLElBQUksTUFBTSxHQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFO2dCQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM3QztTQUNGLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELCtDQUFxQixHQUFyQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN2RCxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsQ0FDdEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQzVDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUMxRCw0QkFBNEIsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkMsQ0FBQztxQ0FNMkIsZUFBTTtHQUx0QixlQUFlLENBc0MzQjtBQXRDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIFBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmNvbnN0IGpzU0hBID0gcmVxdWlyZShcImpzc2hhXCIpO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIHZhciBqYXZhOiBhbnk7XG5kZWNsYXJlIHZhciBOU0J1bmRsZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic2lnbmluXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2lnbmluLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2lnbkluQ29tcG9uZW50IHtcbiAgYXBwUGxhdGZvcm06c3RyaW5nID0gXCJtb2JpbGVcIjtcbiAgdXNlcm5hbWU6c3RyaW5nO1xuICBwYXNzd29yZDpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgdGhpcy5hcHBQbGF0Zm9ybSA9IChhcHAuYW5kcm9pZCA/IFwiQW5kcm9pZFwiIDogKGFwcC5pb3MgPyBcIklPU1wiIDogXCJtb2JpbGVcIikpO1xuICB9XG5cbiAgaGFzaFBhc3N3b3JkKHBhc3N3b3JkOnN0cmluZyk6c3RyaW5nIHtcbiAgICBsZXQgc2hhT2JqOmFueSA9IG5ldyBqc1NIQShcIlNIQS0xXCIsIFwiVEVYVFwiKTtcbiAgICBzaGFPYmoudXBkYXRlKHBhc3N3b3JkKTtcbiAgICByZXR1cm4gc2hhT2JqLmdldEhhc2goXCJIRVhcIik7XG4gIH1cblxuICBzaWduSW4oKSB7XG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBcInVzZXJuYW1lXCI6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5oYXNoUGFzc3dvcmQodGhpcy5wYXNzd29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaXRlbXNcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZ2V0QXBwbGljYXRpb25WZXJzaW9uKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0FuZHJvaWQpIHtcbiAgICAgIGxldCBQYWNrYWdlTWFuYWdlciA9IGFuZHJvaWQuY29udGVudC5wbS5QYWNrYWdlTWFuYWdlcjtcbiAgICAgIGxldCBwa2cgPSBBcHBsaWNhdGlvbi5hbmRyb2lkLmNvbnRleHQuZ2V0UGFja2FnZU1hbmFnZXIoKS5nZXRQYWNrYWdlSW5mbyhcbiAgICAgICAgQXBwbGljYXRpb24uYW5kcm9pZC5jb250ZXh0LmdldFBhY2thZ2VOYW1lKCksXG4gICAgICAgIFBhY2thZ2VNYW5hZ2VyLkdFVF9NRVRBX0RBVEEpO1xuICAgICAgcmV0dXJuIGphdmEubGFuZy5JbnRlZ2VyLnRvU3RyaW5nKHBrZy52ZXJzaW9uQ29kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2ZXJzaW9uID0gTlNCdW5kbGUubWFpbkJ1bmRsZS5vYmplY3RGb3JJbmZvRGljdGlvbmFyeUtleShcbiAgICAgICAgXCJDRkJ1bmRsZVNob3J0VmVyc2lvblN0cmluZ1wiKTtcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIH1cbiAgfVxufVxuIl19