import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SignupComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
