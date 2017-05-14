import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Manga} from './manga';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MangasService {

  private _url = 'http://colem.api/api/v1';

  constructor(private http: Http) { }

  createManga(serie: Manga): Observable<Manga> {
    return this.http.post(this._url + '/mangas', serie)
      .map((response: Response) => <Manga> response.json())
      .do(data => console.log('MANGA:', data))
      .catch((error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error !!');
      });
  }

  getMangas(): Observable<Manga[]> {
    return this.http.get(this._url + '/mangas')
      .map((response: Response) => <Manga[]> response.json())
      .do(data => console.log('Mangas:', data))
      .catch((error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error!!');
      });
  }
}
