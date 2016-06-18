System.register(['angular2/core', 'angular2/router', './sheet', './sheet.service'], function(exports_1, context_1) {
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
    var core_1, router_1, sheet_1, sheet_service_1;
    var SheetDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sheet_1_1) {
                sheet_1 = sheet_1_1;
            },
            function (sheet_service_1_1) {
                sheet_service_1 = sheet_service_1_1;
            }],
        execute: function() {
            SheetDetailComponent = (function () {
                function SheetDetailComponent(_sheetService, _routeParams) {
                    this._sheetService = _sheetService;
                    this._routeParams = _routeParams;
                }
                SheetDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._sheetService.getSheet(id)
                        .then(function (sheet) { return _this.sheet = sheet; });
                };
                SheetDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', sheet_1.Sheet)
                ], SheetDetailComponent.prototype, "sheet", void 0);
                SheetDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sheet-detail',
                        templateUrl: 'app/sheet-detail.component.html',
                        styleUrls: ['app/sheet-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [sheet_service_1.SheetService, router_1.RouteParams])
                ], SheetDetailComponent);
                return SheetDetailComponent;
            }());
            exports_1("SheetDetailComponent", SheetDetailComponent);
        }
    }
});
//# sourceMappingURL=sheet-detail.component.js.map