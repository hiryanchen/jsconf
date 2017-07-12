"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
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
            this.database.createView("items", "1", function (document, emitter) {
                emitter.emit(document._id, document);
            });
            this.isInantiated = true;
        }
    }
    ItemService.prototype.initializeDefaultItems = function () {
        this.items = new Array({ id: 1, title: "TypeScript", description: "TypeScript is awesome!" }, { id: 2, title: "Angular", description: "Angular 框架" }, { id: 3, title: "Ionic", description: "Hybrid mobile application" });
    };
    ItemService.prototype.getStorage = function () {
        return this.database;
    };
    ItemService.prototype.getItems = function () {
        this.initializeDefaultItems();
        // Uses applicaition settings to get the items.
        var items = ApplicationSettings.getString("items");
        if (items) {
            for (var _i = 0, _a = JSON.parse(items); _i < _a.length; _i++) {
                var item = _a[_i];
                console.log("Title: " + item["title"] + " Description: " +
                    item["description"]);
            }
        }
        // instead use data base to get the items
        var rows = this.database.executeQuery('items');
        for (var _b = 0, rows_1 = rows; _b < rows_1.length; _b++) {
            var item = rows_1[_b];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUE0RDtBQUM1RCxpRUFBbUQ7QUFLbkQsSUFBYSxXQUFXO0lBT3BCO1FBSFEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUcvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLGlFQUFpRTtZQUNqRSx3RUFBd0U7WUFDeEUsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBQyxRQUFRLEVBQUUsT0FBTztnQkFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFTyw0Q0FBc0IsR0FBOUI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUUsRUFDckUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUN0RCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFTSxnQ0FBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFOUIsK0NBQStDO1FBQy9DLElBQU0sS0FBSyxHQUFVLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsR0FBRyxDQUFDLENBQWUsVUFBaUIsRUFBakIsS0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFqQixjQUFpQixFQUFqQixJQUFpQjtnQkFBL0IsSUFBTSxJQUFJLFNBQUE7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGdCQUFnQjtvQkFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDMUI7UUFDTCxDQUFDO1FBRUQseUNBQXlDO1FBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxDQUFhLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJO1lBQWhCLElBQUksSUFBSSxhQUFBO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7O0dBQ0EsV0FBVyxDQStEdkI7QUEvRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgZGF0YWJhc2U6IENvdWNoYmFzZTtcbiAgICBwcml2YXRlIGlzSW5hbnRpYXRlZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICAgIHByaXZhdGUgcmVtb3RlSXRlbXM6IEl0ZW1bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNJbmFudGlhdGVkKSB7XG4gICAgICAgIC8vIFRoZSBkYXRhYmFzZSBuYW1lIG11c3QgY29uc2lzdCBvZiBvbmx5IGxvd2VyY2FzZSBBU0NJSSBsZXR0ZXJzXG4gICAgICAgIC8vIGRpZ2l0cywgYW5kIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgXyQoKSstLy4gSXQgbXVzdCBhbHNvIGJlIGxlc3MgdGhhblxuICAgICAgICAvLyAyNDAgYnl0ZXMgYW5kIHN0YXJ0IHdpdGggYSBsb3dlciBjYXNlIGxldHRlclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IENvdWNoYmFzZShcInZpZGVvc1wiKTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5jcmVhdGVWaWV3KFwiaXRlbXNcIiwgXCIxXCIsIChkb2N1bWVudCwgZW1pdHRlcikgPT4ge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pc0luYW50aWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZURlZmF1bHRJdGVtcygpOnZvaWQge1xuICAgICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcbiAgICAgICAgeyBpZDogMSwgdGl0bGU6IFwiVHlwZVNjcmlwdFwiLCBkZXNjcmlwdGlvbjogXCJUeXBlU2NyaXB0IGlzIGF3ZXNvbWUhXCIgfSxcbiAgICAgICAgeyBpZDogMiwgdGl0bGU6IFwiQW5ndWxhclwiLCBkZXNjcmlwdGlvbjogXCJBbmd1bGFyIOahhuaetlwiIH0sXG4gICAgICAgIHsgaWQ6IDMsIHRpdGxlOiBcIklvbmljXCIsIGRlc2NyaXB0aW9uOiBcIkh5YnJpZCBtb2JpbGUgYXBwbGljYXRpb25cIn1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0b3JhZ2UoKTpDb3VjaGJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZTtcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVEZWZhdWx0SXRlbXMoKTtcblxuICAgICAgICAvLyBVc2VzIGFwcGxpY2FpdGlvbiBzZXR0aW5ncyB0byBnZXQgdGhlIGl0ZW1zLlxuICAgICAgICBjb25zdCBpdGVtczpzdHJpbmcgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcIml0ZW1zXCIpO1xuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBKU09OLnBhcnNlKGl0ZW1zKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlOiBcIiArIGl0ZW1bXCJ0aXRsZVwiXSArIFwiIERlc2NyaXB0aW9uOiBcIiArXG4gICAgICAgICAgICAgICAgICBpdGVtW1wiZGVzY3JpcHRpb25cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5zdGVhZCB1c2UgZGF0YSBiYXNlIHRvIGdldCB0aGUgaXRlbXNcbiAgICAgICAgbGV0IHJvd3MgPSB0aGlzLmRhdGFiYXNlLmV4ZWN1dGVRdWVyeSgnaXRlbXMnKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByb3dzKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGx1cyB0aGUgcmVtb3RlIGl0ZW1zXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdCh0aGlzLnJlbW90ZUl0ZW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbTogSXRlbSk6dm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3RlSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG59XG4iXX0=