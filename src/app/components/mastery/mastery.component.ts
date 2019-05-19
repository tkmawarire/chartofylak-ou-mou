import { Component, Input } from '@angular/core';

@Component({
    selector: 'component-mastery',
    templateUrl: './mastery.component.html',
    styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent {
    @Input() item: any;
}
