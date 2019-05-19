import { Component, NgZone } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'section-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    public showMore = false;
    public projectsNumber = 8;

    constructor(public portfolio: SharedService, public zone: NgZone) {}

    moreProjects() {
        this.zone.run(() => {
            this.showMore = true;
            this.projectsNumber = this.portfolio.texts.projects.projects.length;
            console.log(this.showMore);
        });
    }
}
