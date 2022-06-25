import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mltclass: object = {
    selected: true
  }
  index:number = 1;

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  tabSelected(value, routeparams ): void {
    this.index = value;
    this._router.navigate([routeparams]);
  }

}
