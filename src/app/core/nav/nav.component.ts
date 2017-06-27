/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Navbar Component
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {Component} from '@angular/core';
import {EstaAuthService} from 'esta-webjs-extensions';
import {Observable} from 'rxjs/Observable';

interface NavItem {
    displayName: string;
    routerLink: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    public navItems: Array<NavItem> = [
        {displayName: 'Home', routerLink: ''},
        {displayName: 'About', routerLink: 'about'},
        {displayName: 'Theme', routerLink: 'theme'}
    ];
    public userInfo: Observable<any>;

    constructor(public authService: EstaAuthService) {
        this.userInfo = this.authService.getUserInfo();
    }
}
