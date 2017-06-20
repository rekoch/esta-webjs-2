/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: About Component
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 10.05.2017, 2017.
 */
import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

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

    constructor(private postsService: PostsService, private messagesService: MessagesService,
                private translateService: TranslateService) {
        this.aboutMessage = 'Über dieses Template';
    }

    ngOnInit(): any {
        this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
        this.postsService.getPostById(40).subscribe(post => this.postById = post);
    }

    createMessages() {
        this.messagesService.createSuccessMessage('Awesome succes message', 'Success Message');
        this.messagesService.createInfoMessage('Awesome info message', 'Info Message');
        this.messagesService.createWarningMessage('Important warning message', 'Warning Message');
        this.messagesService.createErrorMessage('Awful error message', 'Error Message');
    }

    clearMessages() {
        this.messagesService.clearMessages();
    }

    changeLanguage(lang) {
        this.translateService.use(lang);
    }
}
