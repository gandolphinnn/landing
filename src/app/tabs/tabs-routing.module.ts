import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TabsPage } from './tabs.page'

const routes: Routes = [
	{
		path: '',
		redirectTo: '/about',
		pathMatch: 'full',
	},
	{
		path: '',
		component: TabsPage,
		children: [
			{
				path: 'about',
				loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule),
			},
			{
				path: 'resume',
				loadChildren: () => import('../resume/resume.module').then(m => m.ResumePageModule),
			},
			{
				path: 'profiles',
				loadChildren: () => import('../profiles/profiles.module').then(m => m.ProfilesPageModule),
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
