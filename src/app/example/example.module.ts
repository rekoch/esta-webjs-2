/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Modul für die Features
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 24.05.2017, 2017.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';
import {
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    DataTableModule,
    DropdownModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    PanelModule,
    RadioButtonModule,
    SelectButtonModule,
    SharedModule,
    SplitButtonModule,
    ToggleButtonModule
} from 'primeng/primeng';
import {AboutComponent} from './about/about.component';
import {ThemeComponent} from './theme/theme.component';

@NgModule({
    declarations: [
        AboutComponent,
        ThemeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        ButtonModule,
        SplitButtonModule,
        RadioButtonModule,
        ToggleButtonModule,
        SelectButtonModule,
        InputMaskModule,
        DropdownModule,
        AccordionModule,
        FieldsetModule,
        DataTableModule,
        SharedModule,
        MessagesModule,
        PanelModule
    ]
})
export class ExampleModule {
}
