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
    {path: 'PATH_TO_IMAGE'},
    {path: 'PATH_TO_IMAGE'},
]
}
