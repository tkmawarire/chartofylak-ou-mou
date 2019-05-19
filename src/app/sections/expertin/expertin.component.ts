import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'section-expertin',
    templateUrl: './expertin.component.html',
    styleUrls: ['./expertin.component.scss']
})
export class ExpertinComponent {
    constructor(public portfolio: SharedService) {}
}
