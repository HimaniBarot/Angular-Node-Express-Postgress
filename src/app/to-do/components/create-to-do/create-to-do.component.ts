import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// ------------------------------------------------------------ //
import { ToDo } from '../../models/todo.model';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
})
export class CreateToDoComponent implements OnInit {

  public todoForm!: FormGroup;
  public todoList!: ToDo[];
  public todo_id!: number;
  public isAdd!: boolean;
  public isLoading = false;

  constructor(private _todoService: ToDoService,
    private _fb: FormBuilder,
    private _route: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildTodoForm();
    this.todo_id = this._activatedRoute.snapshot.params['id'];
    this.getById();
  }

  buildTodoForm() {
    this.todoForm = this._fb.group({
      todo_id: [],
      description: ['']
    });
  }

  public addToDo() {
    this.isLoading = true;
    if (!this.isAdd) {
      this.updateTodo();
    } else {
      this.createTodo();
    }
  }

  public createTodo() {
    this._todoService.addToDo(this.todoForm.value).subscribe(() => {
      this.todoList = this.todoForm.value;
      this._route.navigateByUrl("master/todo-list");
    });
  }

  getById() {
    this.isAdd = !this.todo_id;
    if (!this.isAdd) {
      this._todoService
        .getTodoById(this.todo_id)
        .subscribe((data) => this.todoForm.patchValue(data));
    }
  }

  public updateTodo() {
    this._todoService
      .updateTodo(this.todo_id, this.todoForm.value)
      .subscribe((res) => {
        this._route.navigateByUrl("/todo");
        console.log(res);
      });
  }

}
