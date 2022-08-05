import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class AuthService {

  public apiLink: string;

  private keysToRemove: Array<string> = ["token", "username"];
  public isAuthenticated: boolean = false;

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

  public setToken(token: string): any {
    localStorage.setItem("token", token);
  }

  /**
   * @name getUserName
   * @description get userName from localStorage
   * @return string | null
   */
  public getUserName(): string | null {
    return localStorage.getItem("username");
  }

  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  /**
   * @name clearLocalStorage
   * @description remove token from localStorage
   * @return void
   */
  public clearLocalStorage(): void {
    this.keysToRemove.forEach(key =>
      localStorage.removeItem(key)
    )
  }

}
