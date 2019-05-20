import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable: max-line-length
export class AppComponent implements OnInit {
  constructor(public portfolio: SharedService, public meta: Meta, public title: Title) {
    // SEO Metadata
    this.title.setTitle('Takudzwa Mawarire| Portfolio');
    this.meta.addTags([
      {name: 'og:title', content: 'Takudzwa Mawarire | Portfolio' },
      {name: 'og:description', content: 'Hello, my name is Takudzwa Kain Mawarire. I am a Software Developer ( .NET / Web / FE - Angular ) and this is my portfolio page.'},
      {name: 'og:image', content: 'https://avatars2.githubusercontent.com/u/18499856?s=460&v=4' },
      {name: 'author', content: 'Takudzwa Mawarire' },
      {name: 'keywords', content: 'Angular, Portfolio, Tashaa78, Takudzwa, Mawarire'},
      {name: 'description', content: 'Hello, my name is Takudzwa Kain Mawarire. I am a Software Developer ( .NET / Web / FE - Angular ) and this is my portfolio page.'}
    ]);

    // Twitter metadata
    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: '@TakudzwaMawari'});
    this.meta.addTag({name: 'twitter:title', content: 'Online Portfolio'});
    this.meta.addTag({name: 'twitter:description', content: 'Hello, my name is Takudzwa Kain Mawarire. I am a Software Developer ( .NET / Web / FE - Angular ) and this is my portfolio page.'});
    this.meta.addTag({name: 'twitter:text:description', content: 'Hello, my name is Takudzwa Kain Mawarire. I am a Software Developer ( .NET / Web / FE - Angular ) and this is my portfolio page.'});
    this.meta.addTag({name: 'twitter:image', content: 'https://avatars2.githubusercontent.com/u/18499856?s=460&v=4'});
  }
  ngOnInit() {
    if (!this.portfolio.texts) {
      this.portfolio.getContent().subscribe(
        data => {
          // console.log(data);
          this.portfolio.texts = data;
        },
        err => console.error(err)
      );
    }
  }
}
