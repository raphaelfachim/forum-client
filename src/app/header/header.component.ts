import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { HeaderNav } from '../_types';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public username: string = '';

  public logoutIcon = faPowerOff;

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

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
    ) { }
  ngOnInit(): void {
    this.username = this.loginService.user.user;
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
