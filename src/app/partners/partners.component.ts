import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {path: '/assets/images/logo-uba.png'},
    {path: '/assets/images/logo-mtn.png'},
    {path: '/assets/images/logo-visa.png'},
]
}
