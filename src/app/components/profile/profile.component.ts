import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public isMessage = false;
  public user?: User;

  constructor(
    private readonly api: ApiService,
    private readonly route: ActivatedRoute
  ) { 
    route.url.subscribe(url =>  {
      this.isMessage = url[0].path == "message";
    });
  }

  // S'execute au chargement du component
  public async ngOnInit() {
    this.user = await this.api.get("user/me");
    console.log(this.user);
  }

}
