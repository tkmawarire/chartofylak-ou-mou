import { Injectable, EventEmitter, Output } from '@angular/core';
import { content } from '../data';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {

    constructor(public http: HttpClient) { }
    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    menuVisible = false;

    toggleMenu(value?: boolean) {
        if (value || value === false) {
            this.menuVisible = value;
        } else {
            // tslint:disable-next-line: no-unused-expression
            this.menuVisible !== this.menuVisible;
        }

        this.menu.emit(this.menuVisible);
    }

    getContent() {
        // return this.http.get(environment.assets + 'json/data-en.full.json');
        // return this.http.get('/content');
        // Hack for azure
        return of(content);
    }

    sendMessage(data: {name: string, email: string, message: string}) {
        return this.http.post<{status: number, data: Object}>('/contact', data, { observe: 'response' });
    }

    send(data: {name: string, email: string, message: string}) {
        return this.http.post<{status: number, data: Object}>('/send', data, { observe: 'response' });
    }


    // tslint:disable: member-ordering
    public texts: any;
    public loading = false;
    public sections = {};
}
