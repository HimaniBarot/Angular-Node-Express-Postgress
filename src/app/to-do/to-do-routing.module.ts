import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/guard/auth.guard';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: 'todo-list',
    component: ToDoListComponent
  },
  {
    path: 'create-todo',
    component: CreateToDoComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'edit-todo/:id',
    component: CreateToDoComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'todo-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ToDoRoutingModule { }
