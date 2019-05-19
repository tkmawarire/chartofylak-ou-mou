import { Injectable, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

    getTexts() {
        return this.http.get(environment.assets + 'json/data-en.full.json');
    }


    // tslint:disable: member-ordering
    public texts: any;
    public loading = false;
    public sections = {};
}
