import { Component, OnInit } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
	selector: 'app-about',
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class AboutPage implements OnInit {
	constructor() { }

	ngOnInit() { }
}
