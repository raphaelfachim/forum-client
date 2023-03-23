import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      this.updateLocalStorage();
      this.authEmitter.emit(true);
      this.router.navigate(['']);
    });
  }

  public isAutheticated(): boolean {
    if(this.isAuthenticated || (localStorage.length && localStorage.getItem('user').length > 0)){
      this.user = this.getUserFromLocalStorage();
      return true;
    }
    return false;
  }
  
  private updateLocalStorage(): void {
    for(let key of Object.keys(this.user)){
      localStorage.setItem(key, this.user[key]);
    }
    
  }

  public logout(): void {
    this.isAuthenticated = false;
    localStorage.clear();
    this.authEmitter.emit(false);
  }

  public getUserFromLocalStorage(): User {
    return {
      id: Number(localStorage.getItem('id')),
      user: localStorage.getItem('user'),
      email: localStorage.getItem('email'),
      active: localStorage.getItem('active') === 'true' ? true : false
    }
  }
}
