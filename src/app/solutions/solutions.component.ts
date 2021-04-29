import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  template: `<app-our-solutions></app-our-solutions>
              <app-dwl></app-dwl>`,
})
export class SolutionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
