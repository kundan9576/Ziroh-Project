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
  searchPhotos: string = '';
  searchPhotoList:any = [];

  ngOnInit(): void {
    this._ApiRequestService.requestPhotoApi().subscribe(res => {
      this.photosList = res;
      this.searchPhotoList = res;
    }); // we are trigerring the api to get photos list

    this._ApiRequestService.navOpen.next(1); // for changing the value of the navbar icon
  }

  deleteImage(index, photoTitle) {
    // when there is no value in searched field we are deleting from main list and storedList;
    if (!this.searchPhotos) {
      this.photosList.splice(index, 1); 
      this.searchPhotoList.splice( index, 1); //
    } 
    else {
      let deleteIndex_1; // to delete in main stored list
      for (let i = 0; i < this.searchPhotoList.length; i++) {
        if (this.searchPhotoList[i].title === photoTitle ) {
          deleteIndex_1 = i;
        }
      }
      // when we found the same title in the main list
      if( deleteIndex_1 >= 0 ){
        this.searchPhotoList.splice( deleteIndex_1, 1 );
      }
      // splicing the found title

      this.photosList.splice( index, 1 );
      // deleting the index from  searched title
    }
  }


  seachValueChange(value) {

    if (!value) {
      this.photosList = this.searchPhotoList; // when there is nothing in search field all value should come
    }
    else {
      let searchedList = [];
      for (let i = 0; i < this.searchPhotoList.length; i++) {
        if (this.searchPhotoList[i].title.includes(value)) {
          searchedList.push(this.searchPhotoList[i]);
        }
      }
      this.photosList = searchedList;
      // when we found some title in searched list
    }

  }

}
