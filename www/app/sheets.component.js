System.register(['angular2/core', 'angular2/router', './sheet-detail.component', './sheet.service'], function(exports_1, context_1) {
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
    var core_1, router_1, sheet_detail_component_1, sheet_service_1;
    var SheetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sheet_detail_component_1_1) {
                sheet_detail_component_1 = sheet_detail_component_1_1;
            },
            function (sheet_service_1_1) {
                sheet_service_1 = sheet_service_1_1;
            }],
        execute: function() {
            SheetsComponent = (function () {
                function SheetsComponent(_router, _sheetService) {
                    this._router = _router;
                    this._sheetService = _sheetService;
                }
                SheetsComponent.prototype.getSheets = function () {
                    var _this = this;
                    this._sheetService.getSheets().then(function (sheets) { return _this.sheets = sheets; });
                };
                SheetsComponent.prototype.ngOnInit = function () {
                    this.getSheets();
                };
                SheetsComponent.prototype.onSelect = function (sheet) { this.selectedSheet = sheet; };
                SheetsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['SheetDetail', { id: this.selectedSheet.id }]);
                };
                SheetsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sheets',
                        templateUrl: 'app/sheets.component.html',
                        styleUrls: ['app/sheets.component.css'],
                        directives: [sheet_detail_component_1.SheetDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, sheet_service_1.SheetService])
                ], SheetsComponent);
                return SheetsComponent;
            }());
            exports_1("SheetsComponent", SheetsComponent);
        }
    }
});
//# sourceMappingURL=sheets.component.js.map