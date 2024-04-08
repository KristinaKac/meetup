import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalComponent } from '../../components/modal/modal.component';
import { IMeetup } from '../../models/meetup';
import { AuthService } from './../../services/auth.service';
import { MeetupService } from './../../services/meetup.service';

@Component({
  selector: 'app-user-meetups-page',
  templateUrl: './user-meetups-page.component.html',
  styleUrl: './user-meetups-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMeetupsPageComponent implements OnInit {

  public meetupList$!: Observable<IMeetup[]>;

  constructor(
    public meetupService: MeetupService,
    public authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.meetupList$ = this.meetupService.meetupList;
    this.meetupService.getAll().subscribe((data: IMeetup[] | null) => {
      if (!data) { return }
      if (this.authService.user) {
        this.meetupService.meetupList = data;
      }
    })
  }
  openDialog(): void {
    this.dialog.open(ModalComponent, {
      data: { isCreate: true },
      width: '800px'
    });
  }
  delete(id: number) {
    this.meetupService.delete(id).subscribe((data: IMeetup | null) => {
      if (!data) { return }
      this.meetupService.removeMeetup = data;
    })
  }
}
