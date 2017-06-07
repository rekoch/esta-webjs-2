/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Unit-Tests PostService
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 26.04.2017, 2017.
 */
import {TestBed} from '@angular/core/testing';
import {HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {PostsService} from './posts.service';

describe('PostsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [PostsService,
                {provide: XHRBackend, useClass: MockBackend}
            ]
        });
    });

    it('returns observable in getAllPosts() ', (done) => {
        let mockBackend = TestBed.get(XHRBackend);
        let sut = TestBed.get(PostsService);
        let responseOptions = new ResponseOptions({
            body: [{
                id: 1,
                msg: 'Hello'
            }, {
                id: 2,
                msg: 'World'
            }]
        });

        mockBackend.connections.subscribe(connection => {
            connection.mockRespond(new Response(responseOptions));
        });

        let obs = sut.getAllPosts();

        obs.subscribe(r => {
            expect(r[0].id).toBe(1);
            expect(r[0].msg).toBe('Hello');
            expect(r[1].id).toBe(2);
            expect(r[1].msg).toBe('World');
            done();
        });
    });

    it('returns observable in getPostById(x) ', (done) => {
        let mockBackend = TestBed.get(XHRBackend);
        let sut = TestBed.get(PostsService);
        let responseOptions = new ResponseOptions({
            body: {
                id: 1,
                msg: 'Hello'
            }
        });

        mockBackend.connections.subscribe(connection => {
            connection.mockRespond(new Response(responseOptions));
        });

        let obs = sut.getPostById(1);

        obs.subscribe(r => {
            expect(r.id).toBe(1);
            expect(r.msg).toBe('Hello');
            done();
        });
    });
});
