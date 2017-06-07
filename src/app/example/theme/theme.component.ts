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
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MenuItem, Message, SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styles: [`
        .component-example-group {
            margin-top: 20px;
        }
    `]
})
export class ThemeComponent implements OnInit {

    public primengBaseDocumentationUrl = 'https://www.primefaces.org/primeng/#/';
    private breadCrumbItems: Array<MenuItem>;
    private splitButtonItems: Array<MenuItem>;
    private selectButtonItems: Array<SelectItem>;
    private tableItems: Array<any>;
    private tableColumns: Array<any>;
    private fb: FormBuilder;
    private userform: FormGroup;
    private genders: SelectItem[];
    private msgs: Message[] = [];

    constructor() {
        this.fb = new FormBuilder();
    }

    ngOnInit() {
        this.breadCrumbItems = this.createBreadCrumbItems();
        this.splitButtonItems = this.createSplitButtonItems();
        this.selectButtonItems = this.createSelectButtonItems();
        this.tableItems = this.createTableItems();
        this.tableColumns = this.createTableColumns();
        this.initUserForm();
    }

    private createBreadCrumbItems(): Array<MenuItem> {
        let breadCrumbItems = [];
        breadCrumbItems.push({label: 'Categories'});
        breadCrumbItems.push({label: 'Sports'});
        breadCrumbItems.push({label: 'Football'});
        breadCrumbItems.push({label: 'Countries'});
        breadCrumbItems.push({label: 'Spain'});
        breadCrumbItems.push({label: 'Real Madrid'});
        breadCrumbItems.push({label: 'Squad'});
        breadCrumbItems.push({label: 'Sergio Ramos', url: 'https://de.wikipedia.org/wiki/Sergio_Ramos'});
        return breadCrumbItems;
    }

    private createSelectButtonItems(): Array<SelectItem> {
        let cities = [];
        cities.push({label: 'New York', value: 'New York'});
        cities.push({label: 'Rome', value: 'Rome'});
        cities.push({label: 'London', value: 'London'});
        cities.push({label: 'Istanbul', value: 'Istanbul'});
        cities.push({label: 'Paris', value: 'Paris'});
        return cities;
    }

    private createSplitButtonItems(): Array<MenuItem> {
        return [
            {label: 'Update', icon: 'fa-refresh'},
            {label: 'Delete', icon: 'fa-close'},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush'}
        ];
    }

    private createTableColumns() {
        let columns: Array<string> = [];
        columns.push(this.createColumn('firstname', 'firstname'));
        columns.push(this.createColumn('lastname', 'lastname'));
        columns.push(this.createColumn('position', 'position'));
        columns.push(this.createColumn('club', 'club'));
        return columns;
    }

    private createColumn(field: string, header: string): any {
        return {field, header};
    }

    private createTableItems(): Array<any> {
        let players: Array<any> = []
        players.push(this.createPlayer('Cristiano', 'Ronaldo', 'Striker', 'Real Madrid'));
        players.push(this.createPlayer('Karmi', 'Benzema', 'Striker', 'Real Madrid'));
        players.push(this.createPlayer('Sergio', 'Ramos', 'Defender', 'Real Madrid'));
        players.push(this.createPlayer('Gareth', 'Bale', 'Striker', 'Real Madrid'));
        players.push(this.createPlayer('Luca', 'Modric', 'Midfielder', 'Real Madrid'));
        return players;
    }

    private createPlayer(firstname: string, lastname: string, position: string, club: string) {
        return {firstname, lastname, position, club};
    }

    private initUserForm() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });
        this.genders = [];
        this.genders.push({label: 'Select Gender', value: ''});
        this.genders.push({label: 'Male', value: 'Male'});
        this.genders.push({label: 'Female', value: 'Female'});
    }

    public onSubmit(formValue): void {
        console.log('You submitted', formValue);
    }

    public showSuccess(): void {
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'PrimeNG rocks'});
    }

    public showInfo(): void {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
    }

    public showWarn(): void {
        this.msgs = [];
        this.msgs.push({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    public showError(): void {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    public showMultiple(): void {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks'});
        this.msgs.push({severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks'});
        this.msgs.push({severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'});
    }

    public clear(): void {
        this.msgs = [];
    }
}
