import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../_dto';
import { User } from '../_types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly endpoint = `http://localhost:8080/login`;

  constructor(private readonly http: HttpClient) { }

  public login(loginDto: LoginDTO): Observable<User> {
    return this.http.post<User>(this.endpoint, loginDto);
  }
}
