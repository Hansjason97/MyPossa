import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { mergeMap } from 'rxjs/operators';

@Component ({
    selector: 'app-agreement',
    templateUrl: './agreement.component.html',
    styleUrls: ['./agreement.component.css']
})

export class AgreementComponent {
    constructor(public translate: TranslateService, private titleService: Title) { 
        translate.onLangChange.pipe(
            mergeMap(() => translate.get('TITLE.AGREEMENT'))
          ).subscribe((res) => this.titleService.setTitle(res));
    }
}