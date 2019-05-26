import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'section-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent{
    constructor(public portfolio: SharedService) {}

}
