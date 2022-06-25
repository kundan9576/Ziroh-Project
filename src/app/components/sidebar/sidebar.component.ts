import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from 'src/app/services/api-request.service';

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

  constructor( private _router: Router, private _dataService: ApiRequestService ) {
    this._dataService.navOpen.subscribe(res => {
      this.index = res;
    });
  }

  ngOnInit(): void {
  }

  tabSelected(value, routeparams ): void {
    this.index = value;
    this._router.navigate([routeparams]);
  }

}
