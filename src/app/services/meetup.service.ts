import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IMeetup } from '../models/meetup';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  baseURL: string = `${environment.backendOrigin}/meetup`;

  public meetupList!: IMeetup[];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAll(): Observable<IMeetup[] | null> {
    return this.http
      .get<IMeetup[]>(`${this.baseURL}`)
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );
  }

  subscribe(idMeetup: number, idUser: number): Observable<IMeetup | null> {
    return this.http
      .put<IMeetup>(`${this.baseURL}`, { idMeetup, idUser })
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );
  }
  unsubscribe(idMeetup: number, idUser: number): Observable<IMeetup | null> {
    return this.http
      .delete<IMeetup>(`${this.baseURL}`, { body: { idMeetup, idUser } })
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );
  }
  // filter(search: string, criterion: 'name' | 'description' | 'location' | 'time' | 'owner') {
  //   this.meetupList = this.meetupList.filter(item => {
  //     if (criterion === 'owner') {
  //       return item[criterion].fio.toLowerCase().includes(search.toLowerCase())
  //     } else {
  //       return item[criterion].toLowerCase().includes(search.toLowerCase())
  //     }
  //   })
  // }
}
