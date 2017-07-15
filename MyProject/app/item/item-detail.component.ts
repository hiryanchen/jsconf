import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { ImageSource, fromAsset } from "image-source";
import { ImageAsset } from 'tns-core-modules/image-asset';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    imageStr: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
        if (this.item.image) {
          this.imageStr = "data:image/jpeg;base64," + this.item.image;
        }
    }
}
