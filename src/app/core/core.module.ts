/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Core Module
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GrowlModule} from 'primeng/primeng';

import {HomeComponent} from './home/home.component';
import {MessageComponent} from './messages/messages.component';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {NavComponent} from './nav/nav.component';
import {MessageService} from './messages/messages.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        GrowlModule
    ],
    declarations: [NavComponent, HomeComponent, MessageComponent],
    providers: [MessageService],
    exports: [NavComponent, MessageComponent]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'core module');
    }
}
