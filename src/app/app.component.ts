import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template!<h1>
  // <p>Angular is cool!</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red; }`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Unauthorized';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Spring Hotel';
    this.logger.Log('AppComponent.ngOnInit()');
    this.localStorage.setItem('name', 'Spring Hotel');
  }
 
  constructor(
    @Optional() private logger: LoggerService,
    @Inject(LocalStorageToken) private localStorage: any,
    private initService: InitService
  ) {
    console.log(initService.config);
    
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
