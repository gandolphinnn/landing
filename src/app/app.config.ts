import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { MissingTranslationHandler, MissingTranslationHandlerParams, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { appRoutes } from './app.routes';

const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(appRoutes),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(),
		provideTranslateService({
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [HttpClient],
			},
			missingTranslationHandler: {
				provide: MissingTranslationHandler,
				useValue: {
					handle: (params: MissingTranslationHandlerParams) => params.key,
				},
			},
		})
	],
};
