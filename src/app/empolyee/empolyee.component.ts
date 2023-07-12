import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';


@Component({
  selector: 'hinv-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.scss'],
  // providers: [RoomsService] //separate instance of RoomsService, different from root singleton
})
export class EmpolyeeComponent implements OnInit{

  empName: string = "John2";

  //Use self when you want service to be available only on this level
  // constructor(@Self() private roomsService: RoomsService) {}
  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {
    // console.log(this);
    
  }
}
