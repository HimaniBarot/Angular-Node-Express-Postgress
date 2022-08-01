import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ToDoService {

  private _apiLink: string;

  constructor(private _http: HttpClient) { 
    this._apiLink = "http://localhost:3000";
  }

  public getToDoList(): Observable<any>{
    return this._http.get<any>(`${this._apiLink}/todo`);
  }

  public addToDo(todo: any): Observable<any>{
    return this._http.post<any>(`${this._apiLink}/todo`, todo)
  }
}
