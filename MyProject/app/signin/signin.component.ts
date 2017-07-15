import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

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
  forgot:boolean = false;

  constructor(private router:Router) {
    this.appPlatform = (app.android ? "Android" : (app.ios ? "IOS" : "mobile"));
  }

  hashPassword(password:string):string {
    let shaObj:any = new jsSHA("SHA-1", "TEXT");
    shaObj.update(password);
    return shaObj.getHash("HEX");
  }

  signIn() {
    const hash:string = this.hashPassword(this.password);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "username": this.username,
        "password": hash
      }
    }
    if (hash == "93f8bb0eb2c659b85694486c41717eaf0fe23cd4") {
      this.router.navigate(["items"], navigationExtras);
    } else {
      this.forgot = true;
    }
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
