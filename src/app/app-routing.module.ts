import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeetupsPageComponent } from './pages/meetups-page/meetups-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, title: 'Login' },
  { path: 'meetups', component: MeetupsPageComponent, title: 'All Meetups' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
