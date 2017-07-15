"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var ItemService = (function () {
    function ItemService() {
        this.items = [];
        this.remoteItems = [];
        if (!this.isInantiated) {
            // The database name must consist of only lowercase ASCII letters
            // digits, and the special characters _$()+-/. It must also be less than
            // 240 bytes and start with a lower case letter
            this.database = new nativescript_couchbase_1.Couchbase("videos");
            // this.database.destroyDatabase();
            this.database.createView("items", "1", function (document, emitter) {
                emitter.emit(document._id, document);
            });
            this.isInantiated = true;
        }
    }
    ItemService.prototype.initializeDefaultItems = function () {
        this.items = new Array({ id: 1,
            title: "TypeScript",
            description: "TypeScript is a typed superset of JavaScript that compiles into plain JavaScript!",
            image: undefined }, { id: 2,
            title: "Angular",
            description: "一套框架，多种平台同时适用手机与桌面",
            image: undefined }, { id: 3,
            title: "Ionic",
            description: "Hybrid mobile application",
            image: undefined });
    };
    ItemService.prototype.getStorage = function () {
        return this.database;
    };
    ItemService.prototype.getItems = function () {
        this.initializeDefaultItems();
        // instead use data base to get the items
        var rows = this.database.executeQuery('items');
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var item = rows_1[_i];
            this.items.push(item);
        }
        // Plus the remote items
        this.items = this.items.concat(this.remoteItems);
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.addItem = function (item) {
        this.remoteItems.push(item);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGlFQUFtRDtBQUtuRCxJQUFhLFdBQVc7SUFPcEI7UUFIUSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkIsaUVBQWlFO1lBQ2pFLHdFQUF3RTtZQUN4RSwrQ0FBK0M7WUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsbUNBQW1DO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBQyxRQUFRLEVBQUUsT0FBTztnQkFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFTyw0Q0FBc0IsR0FBOUI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLFlBQVk7WUFDbkIsV0FBVyxFQUFFLG1GQUFtRjtZQUNoRyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQ3BCLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFDcEIsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxPQUFPO1lBQ2QsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQ3JCLENBQUM7SUFDSixDQUFDO0lBRU0sZ0NBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTlCLHlDQUF5QztRQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsQ0FBYSxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtZQUFoQixJQUFJLElBQUksYUFBQTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRVksV0FBVztJQUR2QixpQkFBVSxFQUFFOztHQUNBLFdBQVcsQ0FnRXZCO0FBaEVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBDb3VjaGJhc2U7XG4gICAgcHJpdmF0ZSBpc0luYW50aWF0ZWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIGl0ZW1zOiBJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIHJlbW90ZUl0ZW1zOiBJdGVtW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgaWYgKCF0aGlzLmlzSW5hbnRpYXRlZCkge1xuICAgICAgICAvLyBUaGUgZGF0YWJhc2UgbmFtZSBtdXN0IGNvbnNpc3Qgb2Ygb25seSBsb3dlcmNhc2UgQVNDSUkgbGV0dGVyc1xuICAgICAgICAvLyBkaWdpdHMsIGFuZCB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIF8kKCkrLS8uIEl0IG11c3QgYWxzbyBiZSBsZXNzIHRoYW5cbiAgICAgICAgLy8gMjQwIGJ5dGVzIGFuZCBzdGFydCB3aXRoIGEgbG93ZXIgY2FzZSBsZXR0ZXJcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UoXCJ2aWRlb3NcIik7XG4gICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuZGVzdHJveURhdGFiYXNlKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlVmlldyhcIml0ZW1zXCIsIFwiMVwiLCAoZG9jdW1lbnQsIGVtaXR0ZXIpID0+IHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaXNJbmFudGlhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVEZWZhdWx0SXRlbXMoKTp2b2lkIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oXG4gICAgICAgIHsgaWQ6IDEsXG4gICAgICAgICAgdGl0bGU6IFwiVHlwZVNjcmlwdFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlR5cGVTY3JpcHQgaXMgYSB0eXBlZCBzdXBlcnNldCBvZiBKYXZhU2NyaXB0IHRoYXQgY29tcGlsZXMgaW50byBwbGFpbiBKYXZhU2NyaXB0IVwiLFxuICAgICAgICAgIGltYWdlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgeyBpZDogMixcbiAgICAgICAgICB0aXRsZTogXCJBbmd1bGFyXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwi5LiA5aWX5qGG5p6277yM5aSa56eN5bmz5Y+w5ZCM5pe26YCC55So5omL5py65LiO5qGM6Z2iXCIsXG4gICAgICAgICAgaW1hZ2U6IHVuZGVmaW5lZCB9LFxuICAgICAgICB7IGlkOiAzLFxuICAgICAgICAgIHRpdGxlOiBcIklvbmljXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiSHlicmlkIG1vYmlsZSBhcHBsaWNhdGlvblwiLFxuICAgICAgICAgIGltYWdlOiB1bmRlZmluZWQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RvcmFnZSgpOkNvdWNoYmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURlZmF1bHRJdGVtcygpO1xuXG4gICAgICAgIC8vIGluc3RlYWQgdXNlIGRhdGEgYmFzZSB0byBnZXQgdGhlIGl0ZW1zXG4gICAgICAgIGxldCByb3dzID0gdGhpcy5kYXRhYmFzZS5leGVjdXRlUXVlcnkoJ2l0ZW1zJyk7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygcm93cykge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsdXMgdGhlIHJlbW90ZSBpdGVtc1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQodGhpcy5yZW1vdGVJdGVtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW06IEl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnJlbW90ZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufVxuIl19