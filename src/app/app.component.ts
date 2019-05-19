import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(public portfolio: SharedService, public meta: Meta) {
    this.meta.addTags([
      { name: 'og:title', content: 'Takudzwa | Portfolio' },
      // tslint:disable-next-line: max-line-length
      {
        name: 'og:description',
        content:
          'Hello, my name is Takudzwa Kain Mawarire. I am a Software Developer ( .NET / Web / FE - Angular ) and this is my portfolio page.'
      },
      { name: 'og:image', content: '/assets/img/social-min.png' },
      { name: 'author', content: 'Tashaa78' },
      {
        name: 'keywords',
        content: 'Angular, Portfolio, Tashaa78, Takudzwa, Mawarire'
      },
      // tslint:disable-next-line: max-line-length
      {
        name: 'description',
        content:
          'Hello, my name is Takudzwa Kain Mawarire. I am a Software Developer ( .NET / Web / FE - Angular ) and this is my portfolio page.'
      }
    ]);
  }
  ngOnInit() {
    if (!this.portfolio.texts) {
      this.portfolio.getTexts().subscribe(
        data => {
          console.log(data);
          this.portfolio.texts = data;
        },
        err => console.error(err)
      );
    }
  }
}
