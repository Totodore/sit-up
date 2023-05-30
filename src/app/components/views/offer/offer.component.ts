import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { ApiService } from 'src/app/services/api.service';


export interface Tags {
  name: string;
}
export interface Photo {
  url: string;
}


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})

export class OfferComponent {
  pets=true
  plant=false
  clean=true

  classPets="iconFalse"
  classPlant="iconFalse"
  classClean="iconFalse"

  public announcement?: AnnouncementModel;
  constructor(private readonly _api: ApiService,
    /*private readonly _snackbar: SnackbarService*/){
    if (this.pets==true){
      this.classPets="iconTrue"}
    if (this.plant==true){
      this.classPets="iconTrue"}
      if (this.clean==true){
        this.classClean="iconTrue"}

    }

  text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  ownerName="example name";
  ownerDetails="details about the owner";
  condition="condition"
  mainPhoto="https://material.angular.io/assets/img/examples/shiba2.jpg"
  photoOwner="https://material.angular.io/assets/img/examples/shiba2.jpg"

  Photo: Photo[]=[
    {url:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url:"../../../../assets/photo/sit-up-logo.jpg"},
    {url:"../../../../assets/photo/house-exemple.jpg"},
    {url:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url:"../../../../assets/photo/sit-up-logo.jpg"},
    {url:"../../../../assets/photo/house-exemple.jpg"},
  ]
  photo1=this.Photo[0]
  i=0;

  lastPhoto(){
    this.i=this.i-1
    let a=this.Photo.length
    if (this.i==-1){
      this.i=a-1
    }
    this.photo1=this.Photo[this.i]
  }
  nextPhoto(){
    this.i=this.i+1
    let a=this.Photo.length
    if (this.i==a){
      this.i=0
    }
    this.photo1=this.Photo[this.i]
  }

  Tags: Tags[] = [
    {name: 'dog'},
    {name: 'cleaning'},
    {name: 'los angeles'},

  ];



  value = '';



//database




  ngOnInit(): void {
    this.getAnnouncement();
  }

  public async getAnnouncement() {
    try {
      this.announcement = await this._api.get("announcement/add/2");
    } catch (e) {
      console.error(e);
      //this._snackbar.snack("Error no announcement");
    }
  }

}
