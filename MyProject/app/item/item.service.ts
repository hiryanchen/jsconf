import { Injectable } from "@angular/core";
import * as ApplicationSettings from "application-settings";
import { Couchbase } from "nativescript-couchbase";

import { Item } from "./item";

@Injectable()
export class ItemService {
    database:Couchbase;

    private items = new Array<Item>(
        { id: 1, title: "TypeScript", description: "TypeScript is awesome!" },
        { id: 2, title: "Angular", description: "Angular 框架" },
        { id: 3, title: "Ionic", description: "Hybrid mobile application"}
    );

    constructor() {
        // this.database = new Couchbase("Videos");
        /*
        this.database.createView("items", "1", (document, emitter) => {
            emitter.emit(document._id, document);
        })
        let rows = this.database.executeQuery("items");
        for (let row of rows) {
            this.items.push(row);
        }
        */
    }

    getItems(): Item[] {
        const items:string = ApplicationSettings.getString("items");
        if (items) {
            for (const item of JSON.parse(items)) {
              console.log("Title: " + item["title"] + " Description: " +
                  item["description"]);
            }
        }
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
