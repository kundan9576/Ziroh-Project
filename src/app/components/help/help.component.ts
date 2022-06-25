import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor( private _dataService : ApiRequestService ) { }

  ngOnInit(): void {
    this._dataService.navOpen.next(4);
  }

}
