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
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

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

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  //doCheck detects any changes to applciation
  constructor() {}

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    // console.log(this.headerChildrenComponent.last.title = "Last Title");
    this.headerChildrenComponent.last.title = "Last Title";
    // this.headerChildrenComponent.get(0)?.title = "First Title"

  }

  ngDoCheck(): void {
    console.log('doCheck is called');
  }

  //init is called first, then cosntructor, put variables initialziation in init
  ngOnInit(): void {
    // console.log(this.headerComponent);

    this.roomList = [
      {
        roomNumber: 101,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 3.7,
      },
      {
        roomNumber: 102,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
        checkinTime: new Date('13-Nov-2022'),
        checkoutTime: new Date('14-Nov-2022'),
        rating: 3.2,
      },
      {
        roomNumber: 404,
        roomType: 'VIP Room',
        amenities:
          'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Biliard Table',
        price: 10000,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
        checkinTime: new Date('9-Nov-2022'),
        checkoutTime: new Date('10-Nov-2022'),
        rating: 4.47789,
      },
    ];
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
      roomNumber: 909,
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
    this.roomList = [...this.roomList, room];
  }
}
