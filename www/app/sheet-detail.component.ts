import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Sheet } from './sheet';
import { SheetService } from './sheet.service';

@Component({
  selector: 'my-sheet-detail',
  templateUrl: 'app/sheet-detail.component.html',
  styleUrls: ['app/sheet-detail.component.css']
})
export class SheetDetailComponent implements OnInit {
  @Input() sheet: Sheet;

  constructor(
    private _sheetService: SheetService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._sheetService.getSheet(id)
      .then(sheet => this.sheet = sheet);
  }

  goBack() {
    window.history.back();
  }
}
