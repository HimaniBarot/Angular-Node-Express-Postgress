import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo.model';

@Injectable()
export class ToDoService {

  private _apiLink: string;

  constructor(private _http: HttpClient) {
    this._apiLink = "http://localhost:3000";
  }

  /**
   * @name getToDoList
   * @description This method gets the todo list from the server.
   * @returns Observable<ToDo[]>
   */
  public getToDoList(): Observable<ToDo[]> {
    return this._http.get<any>(`${this._apiLink}/user/todos`);
  }

  /**
   * @name addToDo
   * @description This method adds the todo in the todo list.
   * @returns Observable<ToDo[]>
   */
  public addToDo(todo: ToDo): Observable<ToDo> {
    return this._http.post<any>(`${this._apiLink}/user/todos`, todo);
  }

  // get by id
  getTodoById(id: number): Observable<ToDo[]>{
    return this._http.get<ToDo[]>(`${this._apiLink}/user/todos/${id}`)
  }

  public deleteTodo(todo_id: number): Observable<number> {
    return this._http.delete<number>(`${this._apiLink}/user/todos/${todo_id}`);
  }

  public updateTodo(id: number, todo: ToDo): Observable<any>{
    return this._http.put<any>(`${this._apiLink}/user/todos/${id}`, todo);
  }
}
