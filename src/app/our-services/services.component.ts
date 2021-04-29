import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `<app-our-services></app-our-services>
              <app-dwl></app-dwl>`,
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
