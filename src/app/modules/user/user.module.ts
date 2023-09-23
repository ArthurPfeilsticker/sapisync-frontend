import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserPageComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
