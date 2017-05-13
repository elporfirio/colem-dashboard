import { Component, OnInit } from '@angular/core';
import {IUser} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  private user: IUser = {
    username: '',
    email: ''
  };

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
  }

  validateUserCreateForm() {
    console.log('Creadno Usuario');
    this.createUser(this.user);
  }

  createUser(newUser) {
    console.log('Llamando sErvicio');
    this.UsersService.createUser(newUser)
      .subscribe(user => this.user = user,
        error => console.log(error));
  }
}
