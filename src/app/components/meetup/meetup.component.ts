import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMeetup } from '../../models/meetup';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrl: './meetup.component.scss'
})
export class MeetupComponent {

  constructor(
    private authService: AuthService
  ) { }

  isOpen: boolean = false;

  @Input() meetup!: IMeetup

  @Output() subscribeEvent = new EventEmitter();
  @Output() unsubscribeEvent = new EventEmitter();

  get isSubscribe() {
    return this.meetup.users.find(item => item.id === this.authService.user?.id);
  }

  subscribe() {
    this.subscribeEvent.emit({
      idMeetup: this.meetup.id,
      idUser: this.authService.user?.id
    });
  }
  unsubscribe() {
    this.unsubscribeEvent.emit({
      idMeetup: this.meetup.id,
      idUser: this.authService.user?.id
    })
  }
}
