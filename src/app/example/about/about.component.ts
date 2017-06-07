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
import {TranslateService} from '@ngx-translate/core';
import {Message} from 'primeng/primeng';

import {PostsService} from './posts.service';
import {MessagesService} from 'esta-webjs-extensions';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    providers: [PostsService]
})
export class AboutComponent implements OnInit {
    aboutMessage: string;
    posts: any[];
    postById: any;
    messages: Array<Message> = [];

    constructor(private postsService: PostsService, private messageService: MessagesService,
                private translateService: TranslateService) {
        this.aboutMessage = 'Über dieses Template';
    }

    ngOnInit(): any {
        this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
        this.postsService.getPostById(40).subscribe(post => this.postById = post);
    }

    createMessages() {
        this.messageService.createSuccessMessage('Awesome succes message', 'Success Message');
        this.messageService.createWarningMessage('Awesome warning message', 'Warning Message');
        this.messageService.createErrorMessage('Awesome error message', 'Error Message');
    }

    changeLanguage(lang) {
        this.translateService.use(lang);
    }
}
