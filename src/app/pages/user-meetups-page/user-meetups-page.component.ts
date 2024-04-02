import { MeetupService } from './../../services/meetup.service';
import { Component } from '@angular/core';
import { IMeetup } from '../../models/meetup';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-meetups-page',
  templateUrl: './user-meetups-page.component.html',
  styleUrl: './user-meetups-page.component.scss'
})
export class UserMeetupsPageComponent {
  constructor(
    private meetupService: MeetupService
  ){}

  create(meetupForm: FormGroup) {
    this.meetupService.create(meetupForm.value).subscribe((data: IMeetup | null) => {
      if (!data) { return }
      meetupForm.reset();
    })
  }

}
