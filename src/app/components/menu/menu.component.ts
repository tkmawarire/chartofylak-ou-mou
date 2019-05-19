import { Component, OnInit, ElementRef } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import {
  style,
  state,
  animate,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'component-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(350, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        // :leave is alias to '* => void'
        animate(350, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  public hovered: any;
  public visible = false;
  public atTop = true;

  constructor(public portfolio: SharedService) {}

  ngOnInit() {
    this.portfolio.menu.subscribe((value: boolean) => {
      this.visible = value;
    });
  }

  onHover(link: string) {
    this.hovered = link;
  }
  onMouseOut() {
    this.hovered = '';
  }

  toggleMenu() {
    this.portfolio.toggleMenu(!this.visible);
  }

  onScroll(event: { srcElement: { documentElement: { scrollTop: any } } }) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    // console.log(scrollTop);
    if (scrollTop === 0) {
      this.atTop = true;
    } else {
      this.atTop = false;
    }
  }

  scrollTo(element: HTMLElement) {
    this.visible = false;

    element.scrollIntoView({ behavior: 'smooth' });
  }
}
