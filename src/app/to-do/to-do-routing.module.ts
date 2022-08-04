import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      // {
      //   path: 'home',
      //   component: HomeComponent
      // },
      {
        path: '',
        component: ToDoListComponent
      },
      {
        path: 'create-todo',
        component: CreateToDoComponent
      },
      {
        path: 'edit-todo/:id',
        component: CreateToDoComponent
      },
    ]
  },
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
