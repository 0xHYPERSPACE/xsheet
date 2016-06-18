import {Component} from 'angular2/core';
import {Sheet} from './sheet';
import {SheetDetailComponent} from './sheet-detail.component';


@Component({
    selector: 'x-sheet',
    template: `
    <h1>{{title}}</h1>

    <ul class="sheet-list">
      <li *ngFor="#sheet of sheets" (click)="onSelect(sheet)" [class.selected]="sheet === selectedSheet">#{{sheet.id}} {{sheet.name}}</li>
    </ul>

    <hr>
    <sheet-detail [sheet]="selectedSheet"></sheet-detail>
    `,
  directives: [SheetDetailComponent]
})


export class AppComponent {
  public sheets = SHEETS;
  title = 'X-Sheet';
  selectedSheet: Sheet;

  onSelect(sheet: Sheet) { this.selectedSheet = sheet; }


}


// Hardcoded stuff dev

var SHEETS: Sheet[] = [
  { "id": 11, "name": "Eleven" },
  { "id": 12, "name": "Twelve", animator: "Sinisa" },
  { "id": 13, "name": "Thirteen" },
  { "id": 14, "name": "Fourteen" },
  { "id": 15, "name": "Fifteen" },
  { "id": 16, "name": "Sixteen" },
  { "id": 17, "name": "Seventeen" },
  { "id": 18, "name": "Eighteen" },
  { "id": 19, "name": "Nineteen" },
  { "id": 20, "name": "Twenty" }
];
