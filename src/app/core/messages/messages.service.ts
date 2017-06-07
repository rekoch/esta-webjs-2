/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Message Servcice
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Message} from 'primeng/primeng';
import {Subject} from 'rxjs';

const MessageSeveritys = {
    SCUCCESS: 'success',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
}

export enum SERVICE_ACTIONS {
    ADD,
    CLEAR
}

@Injectable()
export class MessageService {

    private message$: Subject<Message> = new Subject<Message>();

    constructor() {
    }

    public createSuccessMessage(messageContent: string, summary: string): void {
        this.createMessage(MessageSeveritys.SCUCCESS, summary, messageContent);
    }

    public createInfoMessage(messageContent: string, summary: string): void {
        this.createMessage(MessageSeveritys.INFO, summary, messageContent);
    }

    public createWarningMessage(messageContent: string, summary: string): void {
        this.createMessage(MessageSeveritys.WARN, summary, messageContent);
    }

    public createErrorMessage(messageContent: string, summary: string): void {
        this.createMessage(MessageSeveritys.ERROR, summary, messageContent);
    }

    private createMessage(severity: string, summary: string, detail: string): void {
        let message: Message = {severity, summary, detail};
        this.message$.next(message);
    }

    public getMessageStream(): Observable<Message> {
        return this.message$;
    }
}