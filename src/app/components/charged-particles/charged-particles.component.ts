import { Component, Input, OnInit } from "@angular/core";
import { tsParticles } from "tsparticles";
import { options } from "./config";

@Component({
  selector: "charged-particles",
  template: `
    <div [id]="id">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class ChargedParticlesComponent implements OnInit {
  constructor() { }

  @Input() options: any = options;

  @Input() id: string;

  ngOnInit(): void {
    tsParticles.load(this.id, this.options);
  }
}
