import {Component, Input} from 'angular2/core';
import {Sheet} from './sheet';


@Component({
  selector: 'sheet-detail',
  template: `
    <div *ngIf="sheet">
      <h2>{{sheet.name}} details!</h2>
      <div><label>id: </label>{{sheet.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="sheet.name" placeholder="name"/>
        <br>
        {{sheet.animator}}
      </div>
    </div>
  `
})
export class SheetDetailComponent {
  @Input()
    sheet: Sheet;
}