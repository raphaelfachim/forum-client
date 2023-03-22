import { Component, Input } from '@angular/core';
import { HeaderNav } from 'src/app/_types';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {
  @Input() info: HeaderNav;
}
