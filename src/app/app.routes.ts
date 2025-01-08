import { Routes } from '@angular/router';
import { PixCircleListComponent } from './components/pix-circle-list/pix-circle-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SinglePixCircleComponent } from './components/single-pix-circle/single-pix-circle.component';
import { AddPixComponent } from './components/add-pix/add-pix.component';

export const routes: Routes = [
  // Nous construisons la route (path) vers singlePixCircle de manière à y introduire l'ID du pix recherché en u ajoutant "/:id".
  // ":id" ==> paramètre dynamique (via string litterals ``)
  { path: 'pixcircles/:id', component: SinglePixCircleComponent },
  { path: 'pixcircles', component: PixCircleListComponent },
  { path: 'addpix', component: AddPixComponent },
  { path: '', component: LandingPageComponent },
];
