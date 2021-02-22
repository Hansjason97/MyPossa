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
  constructor (private breakpointObserver: BreakpointObserver,
              public translate: TranslateService){
                /**Translation service */
      translate.addLangs(['en', 'fr']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  isLaptop() {
    return this.breakpointObserver.isMatched('(min-width: 1024px)');
  }
   /**Translation functions */
   public changeLanguage(language: string) {
    this.translate.use(language);
   }
   public get currentLanguage(): string {
    return this.translate.currentLang;
   }
   
}
