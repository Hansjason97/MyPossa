import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif',
  template: `<app-pricing></app-pricing>
              <app-dwl></app-dwl>`,
})
export class TarifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
