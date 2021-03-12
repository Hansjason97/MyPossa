import { AboutComponent } from './about/about.component';
import { AgreementComponent } from './agreement/agreement.component';
import { PricingComponent } from './pricing/pricing.component';
import { ErreurComponent } from './erreur/erreur.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurMapComponent } from './our-map/our-map.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PartnersComponent,
    OurSolutionsComponent,
    OurServicesComponent,
    OurMapComponent,
    TestimonialsComponent,
    ErreurComponent,
    PricingComponent,
    AgreementComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'FR',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
