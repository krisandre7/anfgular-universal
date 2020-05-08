import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { AboutComponent } from '../about/about.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  declarations: [ WelcomeComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class WelcomeRoutingModule { }
