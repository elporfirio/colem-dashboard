import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Serie} from './serie';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../../environments/environment';

@Injectable()
export class SeriesService {

  private _url: string;

  constructor(private http: Http) {
    this._url = environment.host + environment.api;
  }

  createSerie(serie: Serie): Observable<Serie> {
    return this.http.post(this._url + '/series', serie)
      .map((response: Response) => <Serie> response.json())
      .do(data => console.log('SERIE:', data))
      .catch((error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error !!');
      });
  }

  getSeries(): Observable<Serie[]> {
    return this.http.get(this._url + '/series')
      .map((response: Response) => <Serie[]> response.json())
      .do(data => console.log('SERIES:', data))
      .catch((error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error!!');
      });
  }
}
