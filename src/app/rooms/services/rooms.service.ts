import { Inject, Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { share, shareReplay } from 'rxjs';
// import{ enviroment } from '../../../app/enviroments/enviroment'


@Injectable({
  providedIn: 'root',
})
export class RoomsService {

  roomList: RoomList[] = [];

 headers = new HttpHeaders({
    'token': '123456789'
  })

  // !!!!!!!!!!!! Important feature !!!!!!!!!!!!!!
  // '$' 'shareReplay' cashes the requested stream data to use it in future,
  // in case specific API call is made multiple times
  getRooms$ = this.http.get<RoomList[]>('api/rooms').pipe(
    shareReplay(1)
  );



  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient)   {
    console.log(this.config.apiEndpoint);
    
    console.log("Room Service constructor called");
  }

  getRooms() {

    return this.http.get<RoomList[]>('./api/rooms');
    // return this.http.get<RoomList[]>('http://localhost:3000/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
