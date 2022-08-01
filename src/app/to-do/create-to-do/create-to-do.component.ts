import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  public todoForm!: FormGroup;

  constructor(private _todoService: ToDoService, private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  buildTodoForm(){
    this.todoForm = this._fb.group({})
  }

  public addToDo(){
    // this._todoService.addToDo()
  }

}
