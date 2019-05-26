
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { ParticlesComponent } from '../../components/particles/particles.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ VideoComponent, ParticlesComponent ],
    exports:      [ VideoComponent ]
})

export class VideoModule {};

