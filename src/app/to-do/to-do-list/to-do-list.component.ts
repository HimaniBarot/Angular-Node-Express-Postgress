import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from '../models/todo.model';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public todoList!: ToDo[];
  public isTodoList: boolean = false;

  constructor(private _todoService: ToDoService, private _route: Router) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  public getToDoList() {
    this.isTodoList = true;
    this._todoService.getToDoList().subscribe((res) => {
      this.todoList = res;
    })
  }

  public editTodo(id: number) {
    this._route.navigateByUrl(`/todo/edit-todo/${id}`);
  }

  // delete TODO
  public deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe((res) => {
      this.todoList.splice(id - 1, 1);
      console.log('data deleted', res);
      this.getToDoList();
    });
  }

}
