import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { IMeetup } from '../models/meetup';
import moment from 'moment';
import { MeetupService } from '../services/meetup.service';

@Pipe({
  name: 'filterMeetups'
})
export class FilterMeetupsPipe implements PipeTransform {

  constructor(
    private meetupService: MeetupService
  ){}

  transform(meetups: IMeetup[], search: string, criterion: 'name' | 'description' | 'location' | 'time' | 'owner'): IMeetup[] | null | any {
    let meetupList: IMeetup[] = meetups;

    if (!meetupList) { return null }
    if (!criterion || !search) { return meetupList }

    switch (criterion) {
      case 'owner':
        meetupList = meetupList.filter(item => item[criterion]?.fio.toLowerCase().includes(search.toLowerCase()));
        break;
      case 'name':
      case 'description':
      case 'location':
        meetupList = meetupList.filter(item => {
          if (!item[criterion]) { return }
          return item[criterion].toLowerCase().includes(search.toLowerCase())
        });
        break;
      case 'time':
        meetupList = meetupList.filter(item => {
          const date = new Date(item.time);
          return moment(date).isSame(moment(search), 'D');
        })
        break;
      default:
        break;
    }
    this.meetupService.currentPage = 1;
    return meetupList;
  }
}
