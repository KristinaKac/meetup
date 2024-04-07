import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup

  @Output() loginEvent = new EventEmitter();
  @Output() registrationEvent = new EventEmitter();
  @Input() formType: 'login' | 'registration' = 'login';


  constructor() {
    this.loginForm = new FormGroup({
      fio: new FormControl<string>('', [Validators.minLength(2)]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) { return }

    switch (this.formType) {
      case 'login':
        this.loginEvent.emit({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        });
        this.loginForm.reset();
        break;
      case 'registration':
        this.registrationEvent.emit({
          fio: this.loginForm.value.fio,
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        });
        this.loginForm.reset();
        break;
      default:
        break;
    }
  }
}
