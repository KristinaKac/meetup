import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeetupsPageComponent } from './pages/meetups-page/meetups-page.component';
import { UserMeetupsPageComponent } from './pages/user-meetups-page/user-meetups-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: AboutPageComponent, title: 'About' },
  { path: 'login', component: LoginPageComponent, title: 'Login' },
  { path: 'meetups', component: MeetupsPageComponent, title: 'All Meetups', canActivate: [authGuard]},
  { path: 'userMeetups', component: UserMeetupsPageComponent, title: 'My Meetups', canActivate: [authGuard]},
  { path: 'users', component: UsersPageComponent, title: 'Users', canActivate: [authGuard]},
  { path: '**', component: AboutPageComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
