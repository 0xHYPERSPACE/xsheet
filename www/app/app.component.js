System.register(['angular2/core', './sheet-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sheet_detail_component_1;
    var AppComponent, SHEETS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sheet_detail_component_1_1) {
                sheet_detail_component_1 = sheet_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.sheets = SHEETS;
                    this.title = 'X-Sheet';
                }
                AppComponent.prototype.onSelect = function (sheet) { this.selectedSheet = sheet; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'x-sheet',
                        template: "\n    <h1>{{title}}</h1>\n\n    <ul class=\"sheet-list\">\n      <li *ngFor=\"#sheet of sheets\" (click)=\"onSelect(sheet)\" [class.selected]=\"sheet === selectedSheet\">#{{sheet.id}} {{sheet.name}}</li>\n    </ul>\n\n    <hr>\n    <sheet-detail [sheet]=\"selectedSheet\"></sheet-detail>\n    ",
                        directives: [sheet_detail_component_1.SheetDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            // Hardcoded stuff dev
            SHEETS = [
                { "id": 11, "name": "Eleven" },
                { "id": 12, "name": "Twelve" },
                { "id": 13, "name": "Thirteen" },
                { "id": 14, "name": "Fourteen" },
                { "id": 15, "name": "Fifteen" },
                { "id": 16, "name": "Sixteen" },
                { "id": 17, "name": "Seventeen" },
                { "id": 18, "name": "Eighteen" },
                { "id": 19, "name": "Nineteen" },
                { "id": 20, "name": "Twenty" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map