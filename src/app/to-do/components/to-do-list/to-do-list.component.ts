import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// ------------------------------------------------------------- //
import { ToDo } from '../../models/todo.model';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent implements OnInit {

  public todoList: ToDo[] = [];
  public displayedColumns: string[] = ['todo_id', 'description', 'action'];
  public totalList!: number;
  public listPerPage: number = 1;
  public currentPage: number = 1;
  public pageSizeOptions: Array<number> = [1, 2, 5, 25];
  public isLoading = false;

  constructor(private _todoService: ToDoService, private _route: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getToDoList();
  }
  
  public getToDoList() {
    this._todoService.getToDoList().subscribe((res) => {
      this.isLoading = false;
      this.todoList = res;
      this.totalList = this.todoList.length;
    })
  }

  public editTodo(id: number) {
    this._route.navigateByUrl(`/master/edit-todo/${id}`);
  }

  // delete TODO
  public deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe((res) => {
      this.todoList.splice(id - 1, 1);
      this.getToDoList();
    });
  }

}
