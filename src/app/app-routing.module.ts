import { LegalComponent } from './legal/legal.component';
import { AboutComponent } from './about/about.component';
import { AgreementComponent } from './agreement/agreement.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'agreement', component: AgreementComponent },
  { path: 'privacy', component: LegalComponent },
  { path: 'about-us', component: AboutComponent },
  { path:'**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
