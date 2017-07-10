"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var ItemService = (function () {
    function ItemService() {
        this.items = new Array({ id: 1, title: "TypeScript", description: "TypeScript is awesome!" }, { id: 2, title: "Angular", description: "Angular 框架" }, { id: 3, title: "Ionic", description: "Hybrid mobile application" });
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
    ItemService.prototype.getItems = function () {
        var items = ApplicationSettings.getString("items");
        if (items) {
            for (var _i = 0, _a = JSON.parse(items); _i < _a.length; _i++) {
                var item = _a[_i];
                console.log("Title: " + item["title"] + " Description: " +
                    item["description"]);
            }
        }
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUE0RDtBQU01RCxJQUFhLFdBQVc7SUFTcEI7UUFOUSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxFQUNyRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQ3RELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSwyQkFBMkIsRUFBQyxDQUNyRSxDQUFDO1FBR0UsMkNBQTJDO1FBQzNDOzs7Ozs7OztVQVFFO0lBQ04sQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFNLEtBQUssR0FBVSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLEdBQUcsQ0FBQyxDQUFlLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBakIsY0FBaUIsRUFBakIsSUFBaUI7Z0JBQS9CLElBQU0sSUFBSSxTQUFBO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxnQkFBZ0I7b0JBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFOztHQUNBLFdBQVcsQ0FvQ3ZCO0FBcENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBkYXRhYmFzZTpDb3VjaGJhc2U7XG5cbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KFxuICAgICAgICB7IGlkOiAxLCB0aXRsZTogXCJUeXBlU2NyaXB0XCIsIGRlc2NyaXB0aW9uOiBcIlR5cGVTY3JpcHQgaXMgYXdlc29tZSFcIiB9LFxuICAgICAgICB7IGlkOiAyLCB0aXRsZTogXCJBbmd1bGFyXCIsIGRlc2NyaXB0aW9uOiBcIkFuZ3VsYXIg5qGG5p62XCIgfSxcbiAgICAgICAgeyBpZDogMywgdGl0bGU6IFwiSW9uaWNcIiwgZGVzY3JpcHRpb246IFwiSHlicmlkIG1vYmlsZSBhcHBsaWNhdGlvblwifVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UoXCJWaWRlb3NcIik7XG4gICAgICAgIC8qXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlVmlldyhcIml0ZW1zXCIsIFwiMVwiLCAoZG9jdW1lbnQsIGVtaXR0ZXIpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHJvd3MgPSB0aGlzLmRhdGFiYXNlLmV4ZWN1dGVRdWVyeShcIml0ZW1zXCIpO1xuICAgICAgICBmb3IgKGxldCByb3cgb2Ygcm93cykge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICBjb25zdCBpdGVtczpzdHJpbmcgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcIml0ZW1zXCIpO1xuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBKU09OLnBhcnNlKGl0ZW1zKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlOiBcIiArIGl0ZW1bXCJ0aXRsZVwiXSArIFwiIERlc2NyaXB0aW9uOiBcIiArXG4gICAgICAgICAgICAgICAgICBpdGVtW1wiZGVzY3JpcHRpb25cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19