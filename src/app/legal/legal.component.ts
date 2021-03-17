import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { mergeMap } from 'rxjs/operators';

@Component ({
    selector: 'app-legal',
    templateUrl: './legal.component.html',
    styleUrls: ['./legal.component.css']
})

export class LegalComponent {
    constructor(public translate: TranslateService, private titleService: Title) { 
        translate.onLangChange.pipe(
            mergeMap(() => translate.get('TITLE.LEGAL'))
          ).subscribe((res) => this.titleService.setTitle(res));
    }
}