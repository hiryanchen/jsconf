import { Injectable } from "@angular/core";
import * as ApplicationSettings from "application-settings";
import { Couchbase } from "nativescript-couchbase";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private database: Couchbase;
    private isInantiated: boolean;

    private items: Item[] = [];
    private remoteItems: Item[] = [];

    constructor() {
      if (!this.isInantiated) {
        // The database name must consist of only lowercase ASCII letters
        // digits, and the special characters _$()+-/. It must also be less than
        // 240 bytes and start with a lower case letter
        this.database = new Couchbase("videos");
        this.database.createView("items", "1", (document, emitter) => {
          emitter.emit(document._id, document);
        })
        this.isInantiated = true;
      }
    }

    private initializeDefaultItems():void {
      this.items = new Array<Item>(
        { id: 1, title: "TypeScript", description: "TypeScript is awesome!" },
        { id: 2, title: "Angular", description: "Angular 框架" },
        { id: 3, title: "Ionic", description: "Hybrid mobile application"}
      );
    }

    public getStorage():Couchbase {
        return this.database;
    }

    getItems(): Item[] {
        this.initializeDefaultItems();

        // Uses applicaition settings to get the items.
        const items:string = ApplicationSettings.getString("items");
        if (items) {
            for (const item of JSON.parse(items)) {
              console.log("Title: " + item["title"] + " Description: " +
                  item["description"]);
            }
        }

        // instead use data base to get the items
        let rows = this.database.executeQuery('items');
        for (let item of rows) {
          this.items.push(item);
        }

        // Plus the remote items
        this.items = this.items.concat(this.remoteItems);

        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    addItem(item: Item):void {
        this.remoteItems.push(item);
    }
}
