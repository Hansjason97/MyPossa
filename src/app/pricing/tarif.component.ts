import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif',
  template: `<app-header></app-header>
              <app-pricing></app-pricing>
              <app-dwl></app-dwl>
              <app-footer></app-footer>`,
})
export class TarifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
