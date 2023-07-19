import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom_validator';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: ActivatedRoute,
    private snackbar: MatSnackBar,
  ) {}
  ngOnInit(): void {
    //syntax:
    // roomId: new FormControl(''),
    // or
    // roomId: [''],
    const roomId = this.router.snapshot.paramMap.get('roomId');

    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId, disabled: true },
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
        guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.Validatename, CustomValidator.ValidateSpecialChar('*')]],
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
      }, {updateOn: 'blur', validators: [CustomValidator.validateDate]}
      // { updateOn: 'change' }
    );

    // this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => {})
    // })

    //mergeMap tries to subscribe (in form of post requests) to the data as 
    //soon as the new data is provided (does not care about sequence)
    //switchMap will cancel any existing request if it recieves data
    //(cancels post requests)
    //exhaustMap cares about sequence, waits for previous request completion
    //it wont subscribe to newest data
    this.bookingForm.valueChanges
      .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((data) => console.log(data));
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => { console.log(data);
    //  })
    if (this.bookingForm.valid) {
      this.snackbar.open('You successfully booked a room!');
    }

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
