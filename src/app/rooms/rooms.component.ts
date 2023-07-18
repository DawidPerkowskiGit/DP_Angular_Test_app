import {
  Component,
  DoCheck,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  QueryList,
  ViewChildren,
  OnDestroy,
  SkipSelf,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Spring hotel';

  numberOfRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  title = 'Room List';

  roomList: RoomList[] = [];

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error')
  });

  
  totalBytes = 0;

  subscription ! : Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
      return of([])
      
    })
  )

  priceFilter = new FormControl(0);

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  //doCheck detects any changes to applciation
  //SkipSelf to skip this component from dependency search task
  constructor(@SkipSelf() private roomsService: RoomsService,
  private configService: ConfigService) {}

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    // console.log(this.headerChildrenComponent.last.title = "Last Title");
    this.headerChildrenComponent.last.title = 'Last Title';
    // this.headerChildrenComponent.get(0)?.title = "First Title"
  }

  ngDoCheck(): void {
    console.log('doCheck is called');
  }

  //init is called first, then cosntructor, put variables initialziation in init
  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('Request have been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes+= event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          
        }

      }
      
    })

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete'),
      error: () => console.log('error'),
    });
    this.subscription = this.stream.subscribe((data) => console.log(data));
    this.roomsService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
    })
    // console.log(this.roomsService.getRooms());
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Roooooooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    // console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '909',
      roomType: 'Above Clouds Room',
      amenities:
        'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Clouds Top Watching',
      price: 50000,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
      checkinTime: new Date('1-Nov-2022'),
      checkoutTime: new Date('2-Nov-2022'),
      rating: 5.0,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Above Clouds Room EDITED',
      amenities:
        'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Clouds Top Watching',
      price: 50000,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
      checkinTime: new Date('1-Nov-2022'),
      checkoutTime: new Date('2-Nov-2022'),
      rating: 5.0,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    // this.roomsService.editRoom(room).subscribe((data) => {
    //   this.roomList = data;
    // });
  }

  deleteRoom() {

    const id: string = '3'

    this.roomsService.deleteRoom(id).subscribe((data) => {
      this.roomList = data;
    });
  }

  //either use this to unsubscribr
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
  }
}
