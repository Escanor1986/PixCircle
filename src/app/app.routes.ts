import { Routes } from '@angular/router';
import { PixCircleListComponent } from './pix-circle-list/pix-circle-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'pixcircles', component: PixCircleListComponent},
  { path:'', component: LandingPageComponent}
];
