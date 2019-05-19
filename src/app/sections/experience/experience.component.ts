import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'section-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    constructor(public portfolio: SharedService) {}
}
