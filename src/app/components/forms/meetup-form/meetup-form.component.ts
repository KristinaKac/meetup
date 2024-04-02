import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import moment from 'moment';
import 'moment/locale/ru';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrl: './meetup-form.component.scss'
})
export class MeetupFormComponent {
  meetupForm: FormGroup

  @Output() createEvent = new EventEmitter();

  constructor(
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {
    this.meetupForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      time: new FormControl<string>('', [Validators.required]),
      timeHours: new FormControl<string>('', [Validators.required, Validators.pattern('([01]?[0-9]|2[0-3]):[0-5][0-9]')]),
      duration: new FormControl<number>(30, [Validators.required, Validators.pattern('^[ 0-9]+$')]),
      location: new FormControl<string>('', [Validators.required]),
      target_audience: new FormControl<string>('', [Validators.required]),
      need_to_know: new FormControl<string>('', [Validators.required]),
      will_happen: new FormControl<string>('', [Validators.required]),
      reason_to_come: new FormControl<string>('', [Validators.required]),
    });
  }


  onSubmit() {
    if (this.meetupForm.invalid) { return }

    const timeArr = this.meetupForm.value.timeHours.split(':');

    this.meetupForm.value.time.hour(timeArr[0]);
    this.meetupForm.value.time.minute(timeArr[1]);   

    this.createEvent.emit(this.meetupForm);
  }

  getDateFormatString(): string {
    if (this._locale === 'ru_RU') {
      return 'ДД.ММ.ГГГГ';
    }
    return '';
  }

}
