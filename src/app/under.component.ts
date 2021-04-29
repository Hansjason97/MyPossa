import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under',
  template: `<div>
              <p>{{'SUPPORT.UNDER' | translate}}</p>
              <a routerLink="/">
              <button  mat-raised-button color="primary"><mat-icon>keyboard_backspace</mat-icon>{{ '404.BTN' | translate }}</button></a>
              </div>`,
  styles: ['div {text-align:center;padding:100px 0px;} p {text-align:center;font-size:1.5em;font-weight:600;opacity:0.8;}']
})
export class UnderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
