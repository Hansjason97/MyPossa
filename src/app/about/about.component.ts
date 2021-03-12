import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { mergeMap } from 'rxjs/operators';

@Component ({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    constructor(public translate: TranslateService, private titleService: Title) { 
        translate.onLangChange.pipe(
            mergeMap(() => translate.get('TITLE.ABOUT'))
          ).subscribe((res) => this.titleService.setTitle(res));
    }
}