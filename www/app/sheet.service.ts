import { Injectable } from 'angular2/core';

import { Sheet } from './sheet';
import { SHEETS } from './mock-sheets';

@Injectable()
export class SheetService {
  getSheets() {
    return Promise.resolve(SHEETS);
  }

  getSheetsSlowly() {
    return new Promise<Sheet[]>(resolve =>
      setTimeout(()=>resolve(SHEETS), 2000) // 2 seconds
    );
  }

  getSheet(id: number) {
    return Promise.resolve(SHEETS).then(
      sheets => sheets.filter(sheet => sheet.id === id)[0]
    );
  }
}
