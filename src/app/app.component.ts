import { Component } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Belfast Cardiology Clinic';
}
