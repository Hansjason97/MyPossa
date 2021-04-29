import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  template: `<div class="header"><object data="assets/images/docs.svg" ></object>
             <p class="heading">{{ 'DOCS.HEADER' | translate }}</p></div>
             <app-under></app-under>`,
  styles: ['.header{margin: 20px;display: flex;flex-direction: column;text-align: center;} object{max-height:250px;} p{font-weight: 700;font-size: 3.5em;color:#0099CB;margin-top: 20px;line-height: 1.1em;}']
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
