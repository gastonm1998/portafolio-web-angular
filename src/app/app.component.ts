import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  ngOnInit():void{
    AOS.init();
  }
  constructor(private wowService: NgwWowService){
    this.wowService.init();
  }
}
