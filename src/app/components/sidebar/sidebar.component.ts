import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  tabSelected(value): void {
    this.index = value;
  }

}
