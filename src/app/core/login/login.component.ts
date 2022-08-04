import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public message: string = "";
  public username: string = "";

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.buildTodoForm();
  }

  public buildTodoForm() {
    this.loginForm = this._fb.group({
      username: [''],
      password: [''],
    });
  }

  public onLogin() {
    let formValue = this.loginForm.value;
    this._authService.userLogin(formValue).subscribe((res) => {
      console.log(res.message);
      if (res.statusCode == 200) {
        this.username = this._authService.setUserName(res.username);
        this._router.navigateByUrl("/todo");
      }
      return this.message = res.message;
    })
  }

}
