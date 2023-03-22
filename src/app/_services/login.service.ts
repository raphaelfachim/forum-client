import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDTO } from '../_dto';
import { User } from '../_types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly endpoint = `http://localhost:8080/login`;
  private isAuthenticated: boolean = false;
  public user: User;

  public authEmitter = new EventEmitter<boolean>();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
    ) { }

  public login(loginDto: LoginDTO): void {
    this.http.post<User>(this.endpoint, loginDto).subscribe((res) => {
      this.isAuthenticated = true;
      this.user = res;
      this.authEmitter.emit(true);
      this.router.navigate(['']);
    });
  }

  public isAutheticated(): boolean {
    return this.isAuthenticated;
  }
}
