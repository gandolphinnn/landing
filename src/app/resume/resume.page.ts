import { Component, OnInit } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.page.html',
	styleUrls: ['./resume.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class ResumePage implements OnInit {
	constructor() { }

	ngOnInit() { }
}
