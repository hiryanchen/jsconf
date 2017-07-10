import { Component } from "@angular/core";
import {Router, NavigationExtras} from "@angular/router";

import * as app from "tns-core-modules/application";
import * as Platform from "platform";
import * as Application from "application";

const jsSHA = require("jssha");

declare var android: any;
declare var java: any;
declare var NSBundle: any;

@Component({
  selector: "signin",
  moduleId: module.id,
  templateUrl: "./signin.component.html"
})
export class SignInComponent {
  appPlatform:string = "mobile";
  username:string;
  password:string;

  constructor(private router:Router) {
    this.appPlatform = (app.android ? "Android" : (app.ios ? "IOS" : "mobile"));
  }

  signIn() {
    let shaObj:any = new jsSHA("SHA-1", "TEXT");
    shaObj.update(this.password);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "username": this.username,
        "password": shaObj.getHash("HEX")
      }
    }
    this.router.navigate(["items"], navigationExtras);
  }

  getApplicationVersion() {
    if (Platform.isAndroid) {
      let PackageManager = android.content.pm.PackageManager;
      let pkg = Application.android.context.getPackageManager().getPackageInfo(
        Application.android.context.getPackageName(),
        PackageManager.GET_META_DATA);
      return java.lang.Integer.toString(pkg.versionCode);
    } else {
      let version = NSBundle.mainBundle.objectForInfoDictionaryKey(
        "CFBundleShortVersionString");
      return version;
    }
  }
}
