import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import * as ApplicationSettings from "application-settings";
import { Location } from "@angular/common";
import { ImageSource, fromAsset } from "image-source";
import * as camera from "nativescript-camera";

import { Image } from "ui/image";
import { ImageAsset } from 'tns-core-modules/image-asset';

import { Item } from "./item";
import { ItemService } from "./item.service";

import * as app from "tns-core-modules/application";
import * as Platform from "platform";
declare var android: any;

@Component({
    selector: "ns-add-items",
    moduleId: module.id,
    templateUrl: "./add-item.component.html",
})
export class AddItemComponent implements OnInit {
  title: string;
  description: string;
  image: ImageAsset;
  imageString: string;
  private items: Array<any> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private itemService: ItemService) { }

  ngOnInit(): void {
    // Default to []
    const items:any = ApplicationSettings.getString("items", "[]");
    this.items = JSON.parse(items);
  }

  save(): void {
    const newItem:Item = {
      "id": Math.floor(Math.random() * 10000),
      "title" : this.title,
      "description" : this.description,
      "image" : this.imageString
    };

    ApplicationSettings.remove("items");
    this.items.push(newItem);
    ApplicationSettings.setString("items", JSON.stringify(this.items));

    // Save into database instead:
    this.itemService.getStorage().createDocument(newItem);

    // Navigate back to the previous view.
    this.location.back();
  }

  public capture() {
    camera.requestPermissions();
    const cameraOpts:camera.CameraOptions = {};
    cameraOpts.height = 180;
    cameraOpts.width = 180;
    cameraOpts.keepAspectRatio = true;
    cameraOpts.saveToGallery = false;
    camera.takePicture(cameraOpts).then((imageAsset:ImageAsset) => {
      this.image = imageAsset;
      fromAsset(this.image).then((imageSource:ImageSource) => {
        this.imageString = imageSource.toBase64String("jpeg");
      });
    });
  }
}
