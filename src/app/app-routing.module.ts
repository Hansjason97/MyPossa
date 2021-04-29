import { HelpComponent } from './help.component';
import { TarifComponent } from './pricing/tarif.component';
import { ServicesComponent } from './our-services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
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
  { path: 'solutions', component: SolutionsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: TarifComponent },
  { path: 'help', component: HelpComponent},
  { path:'**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
