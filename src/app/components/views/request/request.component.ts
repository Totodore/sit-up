import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { ApiService } from 'src/app/services/api.service';
export interface Tags {
  name: string;
}
export class AutocompleteSimpleExample {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  Text = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];
  Tags: Tags[] = [
    { name: 'dog' },
    { name: 'cleaning' },
    { name: 'los angeles' },

  ];

  value_rooms = '';
  value_guests_min = '';
  value_guests_max = '';
  value_square = '';


  constructor(private readonly _api: ApiService,) { }




  public async addAnnouncement() {
    try {
      await this._api.post("announcement/add/2");
    } catch (e) {
      console.error(e);
      //this._snackbar.snack("Error no announcement");
    }
  }
}
