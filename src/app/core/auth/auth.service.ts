import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/never';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
const Keycloak = require('keycloak-js');

export interface KeycloakProfile {
    id?: string;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    enabled?: boolean;
    emailVerified?: boolean;
    totp?: boolean;
    createdTimestamp?: number;
}

@Injectable()
export class AuthService {
    static keycloak: any;
    static userProfile: BehaviorSubject<KeycloakProfile> = new BehaviorSubject(null);

    static init(options?: any, configUrl?: string): Promise<any> {
        if (configUrl) {
            AuthService.keycloak = new Keycloak(configUrl);
        } else {
            AuthService.keycloak = new Keycloak();
        }

        return new Promise((resolve, reject) => {
            AuthService.keycloak.init(options)
                .success(() => {
                    resolve();
                })
                .error((errorData: any) => {
                    reject(errorData);
                });
        });
    }

    login(): void {
        AuthService.keycloak.login();
    }

    logout(): void {
        AuthService.keycloak.logout();
    }

    authenticated(): boolean {
        return AuthService.keycloak.authenticated;
    }

    refreshToken(minValidity: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            AuthService.keycloak.updateToken(minValidity)
                .success(() => resolve())
                .error((err) => reject(err));
        });
    }

    getToken(): string {
        return AuthService.keycloak.token;
    }

    getAuthHeader(): any {
        return {
            'Authorization': 'Bearer ' + this.getToken()
        };
    }

    getUserInfo(): Observable<KeycloakProfile> {
        if (this.authenticated() && !AuthService.keycloak.profile) {
            AuthService.keycloak.loadUserProfile()
                .success(profile => {
                    AuthService.userProfile.next(profile);
                })
                .error(err => AuthService.userProfile.error(err));
        }

        return AuthService.userProfile.asObservable();
    }
}
