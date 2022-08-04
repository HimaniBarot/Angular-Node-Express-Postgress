import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { MasterComponent } from './core/master/master.component';
import { SignupComponent } from './core/signup/signup.component';

const routes: Routes = [
  {
    path: 'master', component: MasterComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'todo',
    loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule)
  },
  {
    path: '', redirectTo: 'master', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
