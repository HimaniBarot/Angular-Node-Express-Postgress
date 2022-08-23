import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/guard/auth.guard';
import { LoginComponent } from './core/components/login/login.component';
import { MasterComponent } from './core/components/master/master.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SignupComponent } from './core/components/signup/signup.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'master', component: MasterComponent,
    children: [
      {
        path: 'todo',
        loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule),
      },
      {
        path: 'file-upload',
        loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule),
      }
    ]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
