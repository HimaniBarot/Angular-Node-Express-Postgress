import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   component: ToDoComponent
      // },
      {
        path: '',
        component: ToDoListComponent
      },
      {
        path: 'create-todo',
        component: CreateToDoComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
