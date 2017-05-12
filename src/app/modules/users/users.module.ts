import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import {RouterModule} from '@angular/router';
import {UsersService} from './users.service';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'users', component: ListUsersComponent },
      { path: 'users/create', component: CreateUserComponent }
      // { path: 'producto/:id',
      //   canActivate: [ProductDetailGuard],
      //   component: ProductDetailcomponent },
    ])
  ],
  declarations: [ListUsersComponent, CreateUserComponent],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
