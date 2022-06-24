import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-secure-photos',
  templateUrl: './secure-photos.component.html',
  styleUrls: ['./secure-photos.component.css']
})

export class SecurePhotosComponent implements OnInit {

  constructor( private _ApiRequestService: ApiRequestService ) { }

  photosList:any = [];

  ngOnInit(): void {
    this._ApiRequestService.requestPhotoApi().subscribe(res => {
      this.photosList = res;
    });
  }

  deleteImage( index ){
    this.photosList.splice( index, 1 );
  }


}
