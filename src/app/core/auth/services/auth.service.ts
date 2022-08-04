import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class AuthService {

  public apiLink: string;

  constructor(private _http: HttpClient) {
    this.apiLink = "http://localhost:3000";
  }

  public addUser(user: User): Observable<User> {
    return this._http.post<User>(`${this.apiLink}/signup`, user);
  }

  public userLogin(user: User): Observable<any> {
    return this._http.post<any>(`${this.apiLink}/login`, user);
  }

  /**
   * @name setUserName
   * @description set userName to localStorage
   * @return void
   */
  public setUserName(username: string): any {
    localStorage.setItem("username", username);
  }

  /**
   * @name getUserName
   * @description get userName from localStorage
   * @return string | null
   */
   public getUserName(): string | null {
    return localStorage.getItem("username");
  }

  /**
   * @name clearLocalStorage
   * @description remove token from localStorage
   * @return void
   */
   public clearLocalStorage(): void {
      localStorage.removeItem("username")
  }

}
