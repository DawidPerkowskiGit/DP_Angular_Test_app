import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
// import{ enviroment } from '../../../app/enviroments/enviroment'


@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig)   {
    console.log(this.config.apiEndpoint);
    
    console.log("Room Service constructor called");
    
  }

  roomList: RoomList[] = [
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

  getRooms() {
    return this.roomList;
  }
}
