import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dwl',
  template: ` <p>{{'SOLUTIONS.DWL' | translate}}</p><br>
              <div class="play"><a href="https://play.google.com/store/apps/details?id=com.mypossa.starter"><img src="{{'SUPPORT.LINK' | translate}}" alt="Google Play"></a></div>`,
  styles: ['.play {display: flex; justify-content: center; margin-bottom: 80px;} p {font-size:1.7rem;line-height:1.7rem;text-align:center;margin-top: 40px;} img {height: 7vw;} @media only screen and (max-width:950px){img{height:60px;}}']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
