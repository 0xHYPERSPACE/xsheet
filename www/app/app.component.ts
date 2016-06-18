import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { SheetsComponent } from './sheets.component';
import { SheetDetailComponent } from './sheet-detail.component';
import { SheetService } from './sheet.service';

@Component({
  selector: 'x-sheet',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Sheets']">Sheets</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SheetService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'SheetDetail',
    component: SheetDetailComponent
  },
  {
    path: '/sheets',
    name: 'Sheets',
    component: SheetsComponent
  }
])
export class AppComponent {
  title = 'Tour of Sheets';
}
