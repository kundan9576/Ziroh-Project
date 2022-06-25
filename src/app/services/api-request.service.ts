import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, EMPTY, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor( private httpClient: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  photosUrl: string = "https://jsonplaceholder.typicode.com/albums/1/photos";

  fetchGetApi( url ){
    return this.httpClient.get(url, this.httpOptions);
  }

  handleError( error: HttpErrorResponse ) {
    switch (error.status) {
      case 400: {
        window.alert( 'bad request' );
        return EMPTY;
      }
      case 404: {
        window.alert( '404 not found' );
        return EMPTY;
      }
      case 500: {
        window.alert( '500 internal server error' );
        return EMPTY;
      }
    }
  }

  requestPhotoApi() {
    return this.fetchGetApi( this.photosUrl ).pipe( map(res => {
        return res;
      }),
      catchError( async (error) =>  await this.handleError(error) )
    );
  }


  navOpen = new BehaviorSubject <any>(1);

}
