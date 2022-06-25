import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-secure-files',
  templateUrl: './secure-files.component.html',
  styleUrls: ['./secure-files.component.css']
})
export class SecureFilesComponent implements OnInit {

  constructor( private _dataService : ApiRequestService ) { }

  ngOnInit(): void {
    this._dataService.navOpen.next(0);
  }

}
