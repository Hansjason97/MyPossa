import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { mergeMap } from 'rxjs/operators';

@Component ({
    selector: 'app-404',
    templateUrl: './erreur.component.html',
    styleUrls: ['./erreur.component.css']
})

export class ErreurComponent {
    constructor(public translate: TranslateService, private titleService: Title) {
        translate.onLangChange.pipe(
            mergeMap(() => translate.get('TITLE.ERROR'))
          ).subscribe((res) => this.titleService.setTitle(res))
     }
}