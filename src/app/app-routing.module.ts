import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './modules/user/components/user-page/user-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'HomePage',
    component: HomePageComponent,
  },
  {
    path: 'user-page/:param',
    title: 'UserPage',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
