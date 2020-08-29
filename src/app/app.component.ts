import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarParking';
  click = true;
  // tslint:disable-next-line: typedef
  carPark(val: boolean){

    return this.click = val;

  }
  // tslint:disable-next-line: typedef
  carFind(val: boolean){

    return this.click = val;
  }
}
