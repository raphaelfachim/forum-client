import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms' 
import { LoginService } from '../_services/login.service';
import { User } from '../_types';
import { LoginDTO } from '../_dto'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public user: User;

  constructor(private loginService: LoginService) { }

  public submitLogin(): void {
    let loginDto: LoginDTO = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    this.loginService.login(loginDto);
  }
}
