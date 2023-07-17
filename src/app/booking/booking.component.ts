import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private configService: ConfigService, private fb: FormBuilder) {}
  ngOnInit(): void {
    //syntax:
    // roomId: new FormControl(''),
    // or
    // roomId: [''],

    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: [''],
          guestAge: new FormControl(''),
        }),
      ]),
    });
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }
  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: ['Woodland Joseph'],
        guestAge: new FormControl(''),
      }),
    )
    
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
