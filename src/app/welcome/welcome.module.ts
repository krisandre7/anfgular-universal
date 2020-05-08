import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { AboutComponent } from '../about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    WelcomeRoutingModule,
  ],
})
export class WelcomeModule { }
