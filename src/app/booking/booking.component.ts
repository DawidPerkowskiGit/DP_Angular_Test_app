import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  passportFromActive: boolean = false;

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
      roomId: new FormControl(
        { value: '2', disabled: true },
        { validators: [Validators.required] }
      ),
      guestEmail: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
        },
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      //blur update on changing control
      mobileNumber: ['', { updateOn: 'blur' }],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([this.addGuestcontrol()], [Validators.required]),
      tnc: new FormControl(false, { validators: [Validators.required] }),
    }, {updateOn:'blur'});

    this.getBookingData();
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),
      tnc: false,
    });
  }

  addGuest() {
    this.guests.push(this.addGuestcontrol());
  }

  addGuestcontrol() {
    return this.fb.group({
      guestName: ['', { validators: [Validators.required] }],
      guestAge: new FormControl(''),
    });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
    this.passportFromActive = true;
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
      this.passportFromActive = false;
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  //setValue > pass all the values required
  //patch value > you are allowed to skip some controls
  getBookingData() {
    this.bookingForm.setValue({
      roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-Feb-2020'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),
      guests: [],
      tnc: false,
    });
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
