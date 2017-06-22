/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Page Object für die About Seite
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 10.05.2017, 2017.
 */
import {Component, OnInit} from '@angular/core';
import {AuthService, KeycloakProfile} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    public user: Observable<KeycloakProfile>;

    constructor(private authService: AuthService) {
        this.title = 'ESTA WebJS 2';
        this.subtitle = 'Starterkit mit AngularJS 2';
        this.welcomeMessage = 'Herzlich Willkommen';
    }

    ngOnInit() {
        this.user = this.authService.getUserInfo();
    }

    login() {
        this.authService.login();
    }

    refresh() {
        this.authService.refreshToken(-1);
    }

    getToken() {
        console.log(this.authService.getToken());
    }

    logout() {
        this.authService.logout();
    }
}
