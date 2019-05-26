import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MenuModule } from './components';
import {
  AboutModule,
  AccomplishmentsModule,
  ContactModule,
  EducationConferencesModule,
  ExperienceModule,
  ExpertinModule,
  ProjectsModule,
  VideoModule,
} from './sections';
import { SharedService } from './services/shared.service';

// tslint:disable: max-line-length
@NgModule({
  declarations: [
    AppComponent,
    // ParticlesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'portfolio'}),
    // TODO: Remove Routing
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent, pathMatch: 'full'},
    //   { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
    //   { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    // ]),
    TransferHttpCacheModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    MenuModule, VideoModule, AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationConferencesModule, ExperienceModule, ProjectsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
