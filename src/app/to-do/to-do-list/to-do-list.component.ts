import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public todoList: any =[];

  constructor(private _todoService: ToDoService) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  public getToDoList(){
    this._todoService.getToDoList().subscribe((res) => {
      console.log(res);
      this.todoList = res;
    })
  }

}
