import { Component } from '@angular/core';
import { HeaderNav } from '../_types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public navigationList: HeaderNav[] = [
    {
      label: 'Profile',
      path: '/profile'
    },
    {
      label: 'Forum',
      path: '/forum'
    }
  ]
}
