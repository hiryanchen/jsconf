import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import * as ApplicationSettings from "application-settings";
import { Location } from "@angular/common";
import * as camera from "nativescript-camera";

import { Image } from "ui/image";
import { ImageAsset } from 'tns-core-modules/image-asset';

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-add-items",
    moduleId: module.id,
    templateUrl: "./add-item.component.html",
})
export class AddItemComponent implements OnInit {
  title: string;
  description: string;
  image: ImageAsset;
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
      "description" : this.description
    };

    // Not working: ApplicationSettings.clear();
    ApplicationSettings.remove("items");
    this.items.push(newItem);
    ApplicationSettings.setString("items", JSON.stringify(this.items));

    // Save into database instead:
    this.itemService.getStorage().createDocument(newItem);

    // Navigate back to the previous view.
    this.location.back();
  }

  public capture() {
    // if (!camera.isAvailable()) {
      camera.requestPermissions();
    //}
    camera.takePicture().then((imageAsset) => {
      console.log("Result is an image asset instance");
      let image:Image = new Image();
      image.src = imageAsset;
      this.image = imageAsset;
    }).catch((err) => {
      console.log("Error -> " + err.message);
    });
  }
}
