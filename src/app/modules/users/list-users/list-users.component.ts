import { Component, OnInit } from '@angular/core';
import {IUser} from '../user';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: IUser[];

  constructor(private _usersService: UsersService,
  private _router: Router) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users,
        error => console.log(error));
  }

  goTo(param) {
    if(param === 'create'){
      this._router.navigate(['/users/create']);
    }
  }
}
