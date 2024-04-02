import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMeetup } from '../../models/meetup';
import 'moment-timezone';
import moment from 'moment';
import { now } from 'moment-timezone';


moment.locale('ru');
// moment.tz.setDefault("Europe/Moscow");
moment.tz.setDefault();

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrl: './meetup.component.scss'
})
export class MeetupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.checkDateMeetup();

    if (this.meetup.owner.id === this.authService.user?.id) {
      this.isCanEdit = true;
    } else {
      this.isCanEdit = false;
    }
  }

  isOpen: boolean = false;
  isOldMeetup: boolean = false;
  isCanEdit: boolean = false;


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
  getDate(time: string) {
    return moment(time).format('DD.MM.YYYY, HH:mm');
  }
  checkDateMeetup(): void {
    const now = moment();
    const utcDate = moment.utc(this.meetup.time);
    if (utcDate.isAfter(now)) {
      this.isOldMeetup = false
    } else {
      this.isOldMeetup = true;
    }
  }
}
