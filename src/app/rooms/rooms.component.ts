import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Spring hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5, 
  }

  roomList : RoomList[] = [
    {
      roomNumber:101,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
    },
    {
      roomNumber:102,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
      checkinTime: new Date('13-Nov-2022'),
      checkoutTime: new Date('14-Nov-2022'),
    },
    {
      roomNumber:404,
      roomType: 'VIP Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Biliard Table',
      price: 10000,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OxunpVLpH0iJ0TrgmW82zCCk2SqV0Vo6bQ&usqp=CAU.jpeg',
      checkinTime: new Date('9-Nov-2022'),
      checkoutTime: new Date('10-Nov-2022'),
    }
  ]

  constructor() {}

  ngOnInit(): void {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
