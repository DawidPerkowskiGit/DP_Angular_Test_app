import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template!<h1>
  // <p>Angular is cool!</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red; }`]
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role='Unauthorized';
}
