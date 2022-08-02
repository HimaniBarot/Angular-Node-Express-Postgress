import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../models/todo.model';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss']
})
export class CreateToDoComponent implements OnInit {

  public todoForm!: FormGroup;
  public todoList!: ToDo[];
  public todo_id!: number;
  public isAdd!: boolean;

  constructor(private _todoService: ToDoService,
    private _fb: FormBuilder,
    private _route: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildTodoForm();
    this.todo_id = this._activatedRoute.snapshot.params['id'];
  }

  buildTodoForm() {
    this.todoForm = this._fb.group({
      id: [],
      description: ['']
    });
  }

  public addToDo() {
    if (this.isAdd) this.createTodo();
    this.updateTodo();
  }

  public createTodo() {
    this._todoService.addToDo(this.todoForm.value).subscribe((res) => {
      this.todoList = this.todoForm.value;
      this._route.navigateByUrl("/todo");
      console.log(res);
    });
  }

  getById() {
    // this._todoService.getTodoById(this.todo_id).subscribe((res) => {

    // })

    this.isAdd = !this.todo_id;
    if (!this.isAdd) {
      this._todoService
        .getTodoById(this.todo_id)
        .subscribe((data) => this.todoForm.patchValue(data));
    }
  }

  public updateTodo() {
    this._todoService.updateTodo(this.todo_id, this.todoForm.value).subscribe((res) => {
      console.log(res);
    });
  }

}
