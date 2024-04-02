import { AuthService } from './../../services/auth.service';
import { MeetupService } from './../../services/meetup.service';
import { Component, OnInit } from '@angular/core';
import { IMeetup } from '../../models/meetup';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-meetups-page',
  templateUrl: './user-meetups-page.component.html',
  styleUrl: './user-meetups-page.component.scss'
})
export class UserMeetupsPageComponent implements OnInit{
  constructor(
    public meetupService: MeetupService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  create(meetupForm: FormGroup) {
    this.meetupService.create(meetupForm.value).subscribe((data: IMeetup | null) => {
      if (!data) { return }
      meetupForm.reset();
    })
  }
  getAll() {
    this.meetupService.getAll().subscribe((data: IMeetup[] | null) => {
      if (!data) { return }
      console.log(data)

      this.meetupService.userMeetupList = data.filter(
        item => item.owner.id === this.authService.user?.id);
    })
  }

}
