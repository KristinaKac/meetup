import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  formType: 'login' | 'registration' = 'login';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(value: { email: string, password: string }) {
    this.authService.login(value.email, value.password).subscribe((user: IUser | null) => {
      if (!user) { return }
      this.router.navigate(['meetups']);
    })
  }
  registration(value: { fio: string, email: string, password: string }) {
    this.authService.registration(value.fio, value.email, value.password).subscribe((user: IUser | null) => {
      if (!user) { return }
      this.router.navigate(['meetups']);
    })
  }
}
