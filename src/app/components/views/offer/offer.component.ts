import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseActivity } from 'src/app/models/preferences.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})

export class OfferComponent implements OnInit {
  public announcement?: AnnouncementModel;
  public id?: number = 1;

  HouseActivity = HouseActivity;

  constructor(
    private readonly _api: ApiService,
    private readonly router: Router,
    private readonly _route: ActivatedRoute,
  ) { }

  mainPhoto = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  photoOwner = "https://material.angular.io/assets/img/examples/shiba2.jpg"

  photos: string[] = [
    "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "assets/photo/sit-up-logo.jpg",
    "assets/photo/house-exemple.jpg",
    "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "assets/photo/sit-up-logo.jpg",
    "assets/photo/house-exemple.jpg",
  ];

  currentPhoto = this.photos[0];
  currentPhotoIndex = 0;

  lastPhoto() {
    this.currentPhotoIndex = this.currentPhotoIndex - 1
    let a = this.photos.length
    if (this.currentPhotoIndex == -1) {
      this.currentPhotoIndex = a - 1
    }
    this.currentPhoto = this.photos[this.currentPhotoIndex]
  }

  nextPhoto() {
    this.currentPhotoIndex = this.currentPhotoIndex + 1
    let a = this.photos.length
    if (this.currentPhotoIndex == a) {
      this.currentPhotoIndex = 0
    }
    this.currentPhoto = this.photos[this.currentPhotoIndex]
  }

  lastID() {
    if (!this.id)
      return;
    this.router.navigate(["offer", this.id - 1]);
  }

  nextID() {
    if (!this.id)
      return;
    this.router.navigate(["offer", this.id + 1]);
  }


  public ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = +params.get("id")!;
      this.getAnnouncement();
    });
  }

  public async getAnnouncement() {
    try {
      this.announcement = await this._api.get(`announcement/get/${this.id}`);
    } catch (e) {
      console.error(e);
    }
  }
  public async sendMessage(message: string) {
    await this._api.post("message", {
      message,
      receiverId: this.announcement?.author.id
    });
  }

}
