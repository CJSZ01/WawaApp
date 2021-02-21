import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Network Nitpicks', url: 'network-test', icon: 'globe' },
    { title: 'Firebase Follies', url: '/folder/Home', icon: 'flame' },
    { title: 'Profile Picture Perils', url: '/folder/Home', icon: 'person-circle' },
    { title: 'Alliteration Archive', url: '/folder/Home', icon: 'folder-open' },
  ];
  constructor() {}
}
