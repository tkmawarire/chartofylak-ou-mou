import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'section-accomplishments',
    templateUrl: './accomplishments.component.html',
    styleUrls: ['./accomplishments.component.scss']
})
export class AccomplishmentsComponent {
    constructor(public portfolio: SharedService) {}
}
