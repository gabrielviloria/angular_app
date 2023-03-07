import { Component } from '@angular/core';

@Component({
  // Default Selector (Preferred)
  selector: 'app-servers', 

  // Selector as an Attribute 
  // selector: '[app-servers]',

  // Selector as a Class
  // selector: '.app-servers',

  templateUrl: 'servers.component.html',

  // Alternative for templateUrl
  /*
  template: 
  `
  <app-server></app-server>
  <app-server></app-server>
  `,
  */

  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
