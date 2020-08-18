import { ScrollToModule, ScrollToService } from "@nicky-lenaers/ngx-scroll-to";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MenuService } from "./menu.service";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ScrollToModule.forRoot(),
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [ScrollToService, MenuService],
})
export class MenuModule {}
