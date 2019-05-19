import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [ CommonModule, MatButtonModule, MatIconModule, ScrollToModule ],
    declarations: [ MenuComponent ],
    exports:      [ MenuComponent ],
    providers: [
      ScrollToService
    ]
})

export class MenuModule {}
