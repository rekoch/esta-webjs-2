import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import {AuthService} from './app/core/auth/auth.service';

if (environment.production) {
  enableProdMode();
}

AuthService.init({ onLoad: 'check-sso'}, 'assets/auth-config.json')
    .then(() => {
        platformBrowserDynamic().bootstrapModule(AppModule);
    })
    .catch((err) => {
        console.log('Error starting Auth-Service or AngularJS', err);
    });
