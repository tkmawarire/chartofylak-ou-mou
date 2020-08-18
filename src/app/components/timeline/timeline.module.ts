import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimelineComponent } from "./timeline.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatChipsModule],
  declarations: [TimelineComponent],
  exports: [TimelineComponent],
})
export class TimelineModule {}
