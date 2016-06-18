System.register(['angular2/core', './mock-sheets'], function(exports_1, context_1) {
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
    var core_1, mock_sheets_1;
    var SheetService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_sheets_1_1) {
                mock_sheets_1 = mock_sheets_1_1;
            }],
        execute: function() {
            SheetService = (function () {
                function SheetService() {
                }
                SheetService.prototype.getSheets = function () {
                    return Promise.resolve(mock_sheets_1.SHEETS);
                };
                SheetService.prototype.getSheetsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_sheets_1.SHEETS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                SheetService.prototype.getSheet = function (id) {
                    return Promise.resolve(mock_sheets_1.SHEETS).then(function (sheets) { return sheets.filter(function (sheet) { return sheet.id === id; })[0]; });
                };
                SheetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SheetService);
                return SheetService;
            }());
            exports_1("SheetService", SheetService);
        }
    }
});
//# sourceMappingURL=sheet.service.js.map