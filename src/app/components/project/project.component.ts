import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('project') project: any;
}
