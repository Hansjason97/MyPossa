import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  template: `<app-header></app-header>
              <app-our-solutions></app-our-solutions>
              <app-dwl></app-dwl>
              <app-footer></app-footer>`,
})
export class SolutionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
