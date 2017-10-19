// import { Component } from 'node_modules/@angular/core';
import { Component } from '@angular/core';
import { Test } from '../../../test/test';
import { Test as Test2 } from '../../../test2/test';
import { Bla } from 'yolo/bla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = new Test();
  test2 = new Test2();
  title = this.test.yoo + this.test2.yoo;
}
