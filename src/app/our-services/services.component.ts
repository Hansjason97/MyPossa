import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `<app-header></app-header>
              <app-our-services></app-our-services>
              <app-dwl></app-dwl>
              <app-footer></app-footer>`,
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
