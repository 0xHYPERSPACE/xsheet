import {Component} from 'angular2/core';


export class Sheet {
  id: number;
  name: string;
}


@Component({
    selector: 'x-sheet',
    template: `
    <h1>{{title}}</h1>

    <ul class="sheet-list">
      <li *ngFor="#sheet of sheets" (click)="onSelect(sheet)">#{{sheet.id}} {{sheet.name}}</li>
    </ul>

    <hr>
    <div *ngIf="selectedSheet">
    <h2>{{selectedSheet.name}} details!</h2>
    <div><label>id: </label>{{selectedSheet.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedSheet.name" placeholder="Sheet name"/>
  </div>
</div>
    `
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
