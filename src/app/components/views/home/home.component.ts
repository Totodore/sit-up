import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public announcements?: AnnouncementModel[];

  constructor(
    private readonly _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getAllAnnouncement();
  }
  public async getAllAnnouncement() {
    try {
      this.announcements = await this._api.get("/announcement/home");
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no announcement");
    }
  }
}
