import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { EasyPageComponent } from './easy-page/easy-page.component';
import { SprintPageComponent } from './sprint-page/sprint-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'easy', component: EasyPageComponent },
  { path: 'sprint', component: SprintPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
