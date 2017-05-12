import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IUser} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsersService {

  private _url = 'http://colem.api/api/v1';

  constructor(private _http: Http) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get(this._url + '/users')
      .map((response: Response) => <IUser[]> response.json())
      .do(data => console.log('USERS:', data))
      .catch((error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error!!');
      });
  }

  createUser(user: IUser): Observable<IUser> {
    return this._http.post(this._url + '/users', user)
      .map((response: Response) => <IUser> response.json())
      .do(data => console.log('USERS:', data))
      .catch((error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error!!');
      });
  }

  // getUsers(): Observable<IUser[]> {
  //   return Observable.create(observer => {
  //     observer.next();
  //     observer.complete();
  //   });
  // }

}
