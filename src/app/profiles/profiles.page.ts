import { Component, OnInit } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
	selector: 'app-profiles',
	templateUrl: './profiles.page.html',
	styleUrls: ['./profiles.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class ProfilesPage implements OnInit {
	constructor() { }

	ngOnInit() { }
}
