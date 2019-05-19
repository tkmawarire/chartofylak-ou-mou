import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'section-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent{
    constructor(public portfolio: SharedService) {}
}
