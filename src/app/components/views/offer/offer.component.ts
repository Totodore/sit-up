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
  nbOfBed: number | undefined;
  nbOfRooms: number | undefined;
  maxGuest: number | undefined;
  squareMeters: string | undefined;
  date: string | undefined;
  startDate: string | undefined;
  stopDate: string | undefined;

  constructor(private readonly _api: ApiService,
    /*private readonly _snackbar: SnackbarService*/){
    if (this.pets==true){
      this.classPets="iconTrue"}
    if (this.plant==true){
      this.classPets="iconTrue"}
      if (this.clean==true){
        this.classClean="iconTrue"}

    }



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
  id=25
  lastID(){
    this.id = this.id- 1
    this.getAnnouncement();
  }
  nextID(){
    this.id= this.id + 1
    this.getAnnouncement();
  }





  value = '';



//database




  ngOnInit(): void {
    this.getAnnouncement();
  }

  public async getAnnouncement() {

    try {
      this.announcement = await this._api.get(`announcement/get/${this.id}`);
    } catch (e) {
      console.error(e);
      //this._snackbar.snack("Error no announcement");
    }
    this.startDate = this.announcement?.startDate.toLocaleDateString();
    this.stopDate=this.announcement?.stopDate.toLocaleDateString()
  }




}
