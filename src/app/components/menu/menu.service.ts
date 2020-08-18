import { Injectable } from "@angular/core";
import {
  ScrollToService,
  ScrollToConfigOptions,
} from "@nicky-lenaers/ngx-scroll-to";

@Injectable()
export class MenuService {
  constructor(private _scrollToService: ScrollToService) {}

  public triggerScrollTo(destination: string) {
    const config: ScrollToConfigOptions = {
      target: destination,
    };

    this._scrollToService.scrollTo(config);
  }
}
