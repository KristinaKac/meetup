import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

  public userList$!: Observable<IUser[]>;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.userList$ = this.userService.userList;
    this.userService.getAll().subscribe((data: IUser[] | null) => {
      if (!data) { return }
      console.log(data)
    })
  }
}
