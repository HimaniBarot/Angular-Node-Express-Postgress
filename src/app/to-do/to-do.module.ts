import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { ToDoService } from './services/to-do.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoComponent,
    ToDoListComponent,
    CreateToDoComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ToDoComponent,
    ToDoListComponent,
    CreateToDoComponent
  ],
  providers: [ToDoService]
})
export class ToDoModule { }
