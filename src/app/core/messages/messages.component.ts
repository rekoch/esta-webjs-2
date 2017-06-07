/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Message Component
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 07.06.2017, 2017.
 */
import {Component} from '@angular/core';
import {Message} from 'primeng/primeng';
import {MessageService} from './messages.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html'
})
export class MessageComponent {

    messages: Array<Message> = [];

    constructor(private messageService: MessageService) {
        this.messageService.getMessageStream()
            .subscribe(message => this.messages.push(message))
    }
}