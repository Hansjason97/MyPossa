import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPossa';

  constructor (public translate: TranslateService){
                /**Translation service */
      translate.addLangs(['EN', 'FR']);
      translate.setDefaultLang('EN');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/EN|FR/) ? browserLang : 'FR');
      
  }
   
}
