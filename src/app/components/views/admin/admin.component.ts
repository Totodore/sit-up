import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  displayedColumns: (keyof User)[] = ["firstname", "name", "email"];
  public users: User[] = [];
  public search: string = "";

  constructor(
    private readonly api: ApiService,
    private readonly router: Router,
    private readonly snackbar: SnackbarService,
  ) { }

  public async ngOnInit() {
    this.users = await this.api.get("user/all");
    console.log(this.users);
  }

  public async searchUsers() {
    this.users = await this.api.get(`user/all?search=${encodeURIComponent(this.search)}`);
  }

}


