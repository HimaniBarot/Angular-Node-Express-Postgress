import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { ToDoService } from './services/to-do.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ToDoComponent,
    ToDoListComponent,
    CreateToDoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    ToDoComponent,
    ToDoListComponent,
    CreateToDoComponent
  ],
  providers: [ToDoService]
})
export class ToDoModule { }
