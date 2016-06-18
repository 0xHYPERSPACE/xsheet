import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Sheet } from './sheet';
import { SheetService } from './sheet.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sheets: Sheet[] = [];

  constructor(
    private _router: Router,
    private _sheetService: SheetService) {
  }

  ngOnInit() {
    this._sheetService.getSheets()
      .then(sheets => this.sheets = sheets.slice(1,5));
  }

  gotoDetail(sheet: Sheet) {
    let link = ['SheetDetail', { id: sheet.id }];
    this._router.navigate(link);
  }
}
