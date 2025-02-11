import { Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { IonApp, IonicRouteStrategy, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouteReuseStrategy } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	imports: [IonApp, IonRouterOutlet, TabsPage],
	//providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	standalone: true,
})
export class AppComponent {
	constructor() { }
}
