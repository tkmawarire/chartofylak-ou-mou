import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { SharedService } from "./services/shared.service";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "app",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  private readonly description =
    "Hello, my name is Kain Takudzwa Mawarire. I am a Full Stack Software Developer ( .NET / Web / Angular / React ) and Geomatician. This is my portfolio page.";

  private readonly avatar =
    "https://avatars2.githubusercontent.com/u/18499856?s=460&v=4";

  private readonly keywords =
    "Kain Takudzwa Mawarire, Kain Mawarire, Takudzwa Kain Mawarire, Takudzwa Mawarire, Harare, Zimbabwe, Xamarin, C# Developer, Web Developer, Software Developer (.NET, C#, .NET Core), Xamarin Developer, App Developer, Software Developer (Xamarin), .NET Developer, Software Engineer, C# Developer, .NET Developer - C# .NET CORE AZURE Open Banking, ASP.NET Developer, Full Stack Engineer, Full Stack Developer, Junior C# Developer, Intermediate C# Developer, Senior C# Developer, Junior Front End Developer - Angular, Intermediate Angular Developer, Senior C# Developer, .NET Software Developer, Full Stack Developer - .Net Core/Angular 2, C# Developer, Full Stack, ASP.NET Core, JavaScript, Software Applications Developer, Software Developer C#/Web, Typescript, Angular Developer, Portfolio, Tashaa78, Takudzwa, Mawarire, Takudzwa Mawarire, Kain Mawarire, Takudzwa Kain Mawarire, C# Developer, C# Engineer, C#, React Developer, Nodejs Developer, GIS Developer, ";

  constructor(
    public portfolio: SharedService,
    public meta: Meta,
    public title: Title
  ) {
    // SEO Metadata
    this.title.setTitle("Takudzwa Mawarire | Portfolio");

    this.meta.addTags([
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://takudzwa.azurewebsites.net" },
      { name: "og:title", content: "Kain Takudzwa Mawarire | Portfolio" },
      { name: "og:description", content: this.description },
      { name: "og:image", content: this.avatar },
      { name: "author", content: "Takudzwa Mawarire" },
      { name: "keywords", content: this.keywords },
      { name: "description", content: this.description },
    ]);

    // Twitter metadata
    this.meta.addTag({ name: "twitter:card", content: this.avatar });
    this.meta.addTag({ name: "twitter:site", content: "@tkmawarire" });
    this.meta.addTag({ name: "twitter:title", content: "Online Portfolio" });
    this.meta.addTag({
      name: "twitter:description",
      content: this.description,
    });
    this.meta.addTag({
      name: "twitter:text:description",
      content: this.description,
    });
    this.meta.addTag({ name: "twitter:image", content: this.avatar });
  }
  ngOnInit() {
    if (!this.portfolio.texts) {
      this.portfolio.getContent().subscribe(
        (data) => {

          this.portfolio.texts = data;
        },
        (err) => console.error(err)
      );
    }
  }
}
