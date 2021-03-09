import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, private titleService: Title) { 
    translate.onLangChange.pipe(
      mergeMap(() => translate.get('TITLE.HOME'))
    ).subscribe((res) => this.titleService.setTitle(res))
  }

  ngOnInit(): void {
  }

}
