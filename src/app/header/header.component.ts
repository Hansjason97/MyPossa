import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }
   isLaptop() {
    return this.breakpointObserver.isMatched('(min-width: 1024px)');
  }
  ngOnInit(): void { }
  
}
