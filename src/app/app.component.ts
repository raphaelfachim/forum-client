import { Component, OnInit } from '@angular/core';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forum-app';

  public userLogged: boolean = false;

  constructor(private readonly loginService: LoginService){
  }

  ngOnInit(): void {
    this.loginService.authEmitter.subscribe((res) => {
      this.userLogged = res;
    });
  }

}
