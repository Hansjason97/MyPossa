import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) {
     /**Translation service */
     translate.addLangs(['FR', 'EN']);
     translate.setDefaultLang('FR');
     const browserLang = translate.getBrowserLang();
     translate.use(browserLang.match(/FR|EN/) ? browserLang : 'FR');
   }

  ngOnInit(): void { }
  /**Translation functions */
  public changeLanguage(language: string) {
    this.translate.use(language);
    console.log('changeLanguage')
   }
   public get currentLanguage(): string {
    return this.translate.currentLang;
   }
   /**Expension panel */
  panelOpenState = false;
   /**Menu button */
   isHamburguer = true;
  onClick() {
    this.isHamburguer = !this.isHamburguer;
    this.panelOpenState = !this.panelOpenState; //expension panel toggle
  }

}
