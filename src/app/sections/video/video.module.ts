import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoComponent } from "./video.component";
import { TypingAnimationModule } from "../../directives";
import { NgxTypedModule } from "../../components";
import { ChargedParticlesModule } from "../../components";

@NgModule({
  imports: [
    CommonModule,
    TypingAnimationModule,
    NgxTypedModule,
    ChargedParticlesModule,
  ],
  declarations: [VideoComponent],
  exports: [VideoComponent],
})
export class VideoModule { }
