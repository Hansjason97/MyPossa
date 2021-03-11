import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path:'**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
