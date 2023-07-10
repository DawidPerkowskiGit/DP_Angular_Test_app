import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmpolyeeComponent } from '../empolyee/empolyee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmpolyeeComponent) employee !: EmpolyeeComponent;

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'ModifiedJohn';
  }

  constructor() {}

}
