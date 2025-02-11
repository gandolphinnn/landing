import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { addIcons } from 'ionicons'
import { triangle, ellipse, square } from 'ionicons/icons'
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone'

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
	constructor() {
		addIcons({ triangle, ellipse, square })
	}
}
