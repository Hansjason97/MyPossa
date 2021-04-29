import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  template: `<app-header></app-header>
              <div class="header">
              <object data="assets/images/help.svg" ></object>
              <p class="heading">{{'HELP.HEADER' | translate}}</p></div>
              <div class="container end">
                <p>{{'HELP.CONTACT' | translate}}</p>
                <a href="tel:+237670557665"><mat-icon aria-hidden="false">phone</mat-icon> +237 670 55 76 65</a><br>
                <a href="mailto:support@mypossa.com"><mat-icon aria-hidden="false">mail</mat-icon> support@mypossa.com</a>
                <app-dwl></app-dwl>
              </div>
              <app-footer></app-footer>`,
  styles: ['object {max-height: 250px;} .header {margin: 80px 20px; display: flex; flex-direction: column; text-align: center;} .heading {font-size: 3.5em; font-weight: 700; line-height: 1.1em; color: #0099CB;margin-top: 20px;} a{display:flex;align-items:center;text-decoration: none; color: #0099CB; font-weight: 600; font-size: 1.3em;}p {font-size: 1.3em;}.end {margin-bottom: 80px;}']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
