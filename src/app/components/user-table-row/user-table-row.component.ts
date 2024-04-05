import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole } from '../../models/role';
import { IUser } from '../../models/user';

@Component({
  selector: '[app-user-table-row]',
  templateUrl: './user-table-row.component.html',
  styleUrl: './user-table-row.component.scss'
})
export class UserTableRowComponent implements OnInit {
  fio!: string;
  email!: string;
  password!: string;

  ngOnInit(): void {
    this.fio = this.user?.fio || '';
    this.email = this.user?.email || '';
    this.password = this.user?.password || '';
  }

  @Input() roleList!: Observable<IRole[]>;
  @Input() user!: IUser;

  isEdit = false;

  @Output() updateEvent = new EventEmitter();

  onSubmit() {
    console.log(this.user.id)
    console.log(this.fio)
    console.log(this.email)
    console.log(this.password)
    this.updateEvent.emit({ id: this.user.id, fio: this.fio, email: this.email, password: this.password })
  }
}
