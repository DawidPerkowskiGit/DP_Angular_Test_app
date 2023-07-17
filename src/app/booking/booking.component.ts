import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private configService: ConfigService, private fb: FormBuilder) {}
  ngOnInit(): void {

    //syntax:
    // roomId: new FormControl(''),
    // or
    // roomId: [''],

    this.bookingForm = this.fb.group({
      roomId: new FormControl({value: '2', disabled: true}),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAdress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guestCount: [''],
      guestList: [''],
    });
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
    
  }
}

// export class BookingDTO {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   geustName: string;
//   guestAdress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: Guest[];
// }
