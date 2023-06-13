import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { User, UserModel } from 'src/app/models/user.model'
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
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
  public User?: UserModel;
  Text = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];
  Tags: Tags[] = [
    { name: 'dog' },
    { name: 'cleaning' },
    { name: 'rabbit' },
    { name: 'turtle' },
    { name: 'fish' },
    { name: 'snake' },
    { name: 'bird' },
    { name: 'hamster' },
    { name: 'house' },
    { name: 'otherPet' },
    { name: 'children' },
    { name: 'smoking' },
    { name: 'wifi' },

  ];
  selectedChoice: any;
  formatLabel(value: number): string {


    return `${value}`;
  }


  control!: String;

  requestForm: FormGroup = this.fb.group({


    address: ['', Validators.compose([Validators.required])],
    city: ['', Validators.compose([Validators.required])],
    postalCode: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    numberOfBeds: ['', Validators.compose([Validators.required])],
    squareMeters: ['', Validators.compose([Validators.required])],
    startDate: ['', Validators.compose([Validators.required])],
    stopDate: ['', Validators.compose([Validators.required])],
    numberOfMaxPeople: ['', Validators.compose([Validators.required])],
    numberOfRooms: ['', Validators.compose([Validators.required])],

    pet_sitting: [this.control, Validators.compose([Validators.required])],
    plant_sitting: ['', Validators.compose([Validators.required])],
    home_sitting: ['', Validators.compose([Validators.required])],
    cat: ['', Validators.compose([Validators.required])],
    dog: ['', Validators.compose([Validators.required])],
    frog: ['', Validators.compose([Validators.required])],
    rabbit: ['', Validators.compose([Validators.required])],
    turtle: ['', Validators.compose([Validators.required])],
    fish: ['', Validators.compose([Validators.required])],
    snake: ['', Validators.compose([Validators.required])],
    bird: ['', Validators.compose([Validators.required])],
    hamster: ['', Validators.compose([Validators.required])],
    house: ['', Validators.compose([Validators.required])],
    otherPet: ['', Validators.compose([Validators.required])],
    children: ['', Validators.compose([Validators.required])],
    smoking: ['', Validators.compose([Validators.required])],
    wifi: ['', Validators.compose([Validators.required])],

    author: [''],
  }); prefForm: FormGroup = this.fb.group({
    control: ['', Validators.compose([Validators.required])],
  });

  constructor(private readonly api: ApiService, private fb: FormBuilder, private readonly router: Router,) {



  }







  async onSubmit() {
    this.requestForm.patchValue({
      author: this.User
    });
    console.log(this.requestForm.value);



    const ok = await this.api.post('announcement/add', this.requestForm.value);


  }
  ngOnInit(): void {
    this.getUser();

  }
  public async getUser() {
    try {
      this.User = await this.api.get("user/me");

    } catch (e) {
      console.error(e);
      //this._snackbar.snack("Error no announcement");
    }

  }

}



