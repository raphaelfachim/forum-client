import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { HeaderNav } from '../_types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public username: string = '';

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

  constructor(private readonly loginService: LoginService) {

  }
  ngOnInit(): void {
    this.username = this.loginService.user.user;
  }
}
