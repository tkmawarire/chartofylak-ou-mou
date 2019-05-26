import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Particles } from 'particles.ts';

import { DefaultConf } from './../../data/config';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'particles',
  template: `
    <div id="particles-js"></div>
  `
})
export class ParticlesComponent implements OnInit, AfterViewInit {
  particles: Particles;
  // @ViewChild('canvas') canvas: ElementRef;
  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.particles = new Particles(
      'particles-js', this.objectToStringMap(DefaultConf)
    );

    // this.particles.settings.particles.number.value = 150;
    // this.particles.settings.particles.size.value = 3;
    // this.particles.settings.interactivity.events.onhover = {
    //   enable: true,
    //   mode: 'repulse'
    // };
    // this.particles.settings.interactivity.events.onclick = {
    //     enable: true,
    //     mode: 'push'
    // };

    this.particles.settings = DefaultConf;

    this.particles.start();
  }

  objectToStringMap(obj: any) {
    const strMap = new Map();
    for (const k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

  jsonToStringMap(jsonStr: any) {
    return this.objectToStringMap(JSON.parse(jsonStr));
  }
}
