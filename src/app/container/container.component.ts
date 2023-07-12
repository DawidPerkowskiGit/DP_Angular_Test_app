import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmpolyeeComponent } from '../empolyee/empolyee.component';
import { RoomsService } from '../rooms/services/rooms.service';


@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmpolyeeComponent) employee !: EmpolyeeComponent;

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'ModifiedJohn';
  }

  // constructor(@Host() private roomsService?: RoomsService) {}
  constructor() {}
}
