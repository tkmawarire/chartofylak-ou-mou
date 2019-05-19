import { Component, Input } from '@angular/core';

@Component({
    selector: 'component-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
    @Input() job: any;
    @Input() index: any;
}
