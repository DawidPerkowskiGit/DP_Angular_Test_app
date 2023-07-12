import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id: number = 0;

  id$ = this.router.paramMap.pipe(
    map((params) => params.get('id'))
  );



  ngOnInit(): void {
    //subscribe asynchronous, so app unsubsribes automatically

    // this.id$ = this.router.params.pipe(
    //   map((params) => params['id'])
    // )

    //snapshot > if value gets updated in this view it display as updated
    // this.id = this.router.snapshot.params['id'];

    //better not subscribe manualy> have to unsubscribe later
    // this.router.params.subscribe((params)  => {
    //   this.id = params['id'];
    // })

    this.router.paramMap.subscribe((params) => params.get('id'))
  }
}
