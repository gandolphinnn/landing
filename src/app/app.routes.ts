import { Routes } from '@angular/router';
import { ResumePage } from './resume/resume.page';
import { AboutPage } from './about/about.page';
import { ProfilesPage } from './profiles/profiles.page';
import { TabsPage } from './tabs/tabs.page';

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/about',
		pathMatch: 'full',
	},
	{
		path: '',
		component: TabsPage,
		/* children: [
			{
				path: 'about',
				component: AboutPage,
			},
			{
				path: 'resume',
				component: ResumePage
			},
			{
				path: 'profiles',
				component: ProfilesPage,
			},
		] */
	},
];
