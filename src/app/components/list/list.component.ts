import { Component, Input} from '@angular/core';

@Component({
    selector: 'component-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent{
    @Input() item: any;
    @Input() type: any;
}
