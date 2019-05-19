import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'section-education-conferences',
    templateUrl: './education-conferences.component.html',
    styleUrls: ['./education-conferences.component.scss']
})
export class EducationConferencesComponent {
    constructor(public portfolio: SharedService) {}
}
