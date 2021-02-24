import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPossa';
  Laptop = true;
  constructor (private breakpointObserver: BreakpointObserver,
              public translate: TranslateService){
                /**Translation service */
      translate.addLangs(['EN', 'FR']);
      translate.setDefaultLang('EN');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/EN|FR/) ? browserLang : 'EN');

  }

   /**Translation functions */
   public changeLanguage(language: string) {
    this.translate.use(language);
   }
   public get currentLanguage(): string {
    return this.translate.currentLang;
   }
   
}
