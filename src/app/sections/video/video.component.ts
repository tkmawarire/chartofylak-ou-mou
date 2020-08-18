import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { SharedService } from "../../services/shared.service";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  useAnimation,
} from "@angular/animations";
import { shake, jackInTheBox } from "../../animations";
import { NgxTypedComponent } from "../../components/typed/ngx-typed.component";

@Component({

  selector: "section-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
  animations: [
    trigger("EnterLeave", [
      state("flyIn", style({ transform: "translateX(0)" })),
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("1s 600ms ease-in"),
      ]),
      transition(":leave", [
        animate("0.3s ease-out", style({ transform: "translateX(100%)" })),
      ]),
    ]),
    trigger("JackInTheBox", [
      transition(
        "* => *",
        useAnimation(jackInTheBox, {

          params: { timing: 4, delay: 0 },
        })
      ),
    ]),
  ],
})
export class VideoComponent implements OnInit, AfterViewInit {
  titleStart: boolean;

  subtitleStart: boolean;

  showLinks: boolean;

  @ViewChild('typedanimation')
  typedanimation: NgxTypedComponent;

  constructor(public portfolio: SharedService) { }

  ngOnInit(): void {
    this.titleStart = false;
    this.subtitleStart = false;
    this.showLinks = false;
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => (this.titleStart = true), 1000);
  }

  ngAfterViewInit(): void { }

  onTitleAnimationComplete(): void {
    this.titleStart = false;
    setTimeout(() => {
      this.subtitleStart = true;
      this.showLinks = true;
    }, 1000);
  }

  onSubtitleAnimationComplete(): void {
    this.showLinks = true;
  }
}
