import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Sheet } from './sheet';
import { SheetDetailComponent } from './sheet-detail.component';
import { SheetService } from './sheet.service';

@Component({
  selector: 'my-sheets',
  templateUrl: 'app/sheets.component.html',
  styleUrls:  ['app/sheets.component.css'],
  directives: [SheetDetailComponent]
})
export class SheetsComponent implements OnInit {
  sheets: Sheet[];
  selectedSheet: Sheet;

  constructor(
    private _router: Router,
    private _sheetService: SheetService) { }

  getSheets() {
    this._sheetService.getSheets().then(sheets => this.sheets = sheets);
  }

  ngOnInit() {
    this.getSheets();
  }

  onSelect(sheet: Sheet) { this.selectedSheet = sheet; }

  gotoDetail() {
    this._router.navigate(['SheetDetail', { id: this.selectedSheet.id }]);
  }
}
