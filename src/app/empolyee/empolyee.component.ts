import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.scss']
})
export class EmpolyeeComponent implements OnInit{

  empName: string = "John2";

  constructor() {}

  ngOnInit(): void {
    // console.log(this);
    
  }
}
