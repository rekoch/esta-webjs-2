/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Unit-Tests AboutComponent
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 26.04.2017, 2017.
 */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {NavComponent} from './nav.component';

describe('NavbarComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([], {useHash: true})],
            declarations: [NavComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should declare navItems for home, about and theme`, () => {
        const expectedNavItems = [
            {displayName: 'Home', routerLink: ''},
            {displayName: 'About', routerLink: 'about'},
            {displayName: 'Theme', routerLink: 'theme'}
        ];
        expect(expectedNavItems).toEqual(component.navItems);
    });
});
